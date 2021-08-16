import { BadRequestException, Injectable, Logger, HttpService } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Cron, CronExpression } from '@nestjs/schedule'
import { Repository } from 'typeorm'
import { Review, Teacher } from 'src/entities'
import { GetReviewsDto, ReviewDto } from './dtos'
import { TeacherRepository } from './../teachers/teacher.repository'
import * as config from 'config'

const noReviews = 6

@Injectable()
export class ReviewsService {
    private logger = new Logger('ReviewsService')

    constructor(
        @InjectRepository(Review)
        private reviewRepository: Repository<Review>,
        @InjectRepository(TeacherRepository)
        private teacherRepository: TeacherRepository,
        private httpService: HttpService,
    ) {}

    async review(teacher: Teacher, reviewDto: ReviewDto): Promise<void> {
        const { rating, content, token } = reviewDto
        const recaptcha = config.get('recaptcha')
        this.logger.verbose(token)
        this.logger.verbose(recaptcha.secret_key)
        const response = await this.httpService
            .post(
                `https://www.google.com/recaptcha/api/siteverify?secret=${recaptcha.secret_key}&response=${token}`,
            )
            .toPromise()

        if (!response.data || !response.data.success) {
            throw new BadRequestException('Recaptcha verification failed!')
        }

        const review = new Review()
        review.rating = rating
        review.content = content
        review.teacher = teacher
        await review.save()

        teacher.noReviews++
        await teacher.save()
    }

    async getReviews(teacher: Teacher, getReviewsDto: GetReviewsDto): Promise<Review[]> {
        const { reviewId } = getReviewsDto

        const reviews = await this.reviewRepository.find({
            where: { teacher: teacher.code },
            order: {
                createdDate: 'DESC',
            },
        })

        if (!reviewId) {
            return reviews.slice(0, noReviews)
        }
        const reviewIndex = reviews.findIndex((review) => review.id === reviewId)
        if (reviewIndex === -1) {
            throw new BadRequestException(`Cannot find review with Id ${reviewId}`)
        }
        if (reviewIndex === reviews.length - 1) {
            return []
        }
        return reviews.slice(reviewIndex + 1, reviewIndex + 1 + noReviews)
    }

    @Cron('0 */10 * * * *', { timeZone: 'Asia/Ho_Chi_Minh' })
    async calculate() {
        this.logger.verbose('Calculate Reviews percentages and Rating of all teachers stars!')
        const teachers = await this.teacherRepository.find({})

        teachers.forEach(async (teacher) => {
            let sum = 0
            let rating = 0
            const stars = [0, 0, 0, 0, 0]

            const [reviews, noReviews] = await this.reviewRepository.findAndCount({
                where: { teacher: teacher.code },
            })

            reviews.forEach((review) => {
                stars[review.rating - 1]++
                sum += review.rating
            })
            if (noReviews) {
                rating = sum / noReviews
            }

            const noStar = stars.reduce((a, b) => a + b)
            teacher.oneStarPercentage = noStar
                ? parseFloat(((stars[0] / noStar) * 100).toFixed(2))
                : 0
            teacher.twoStarPercentage = noStar
                ? parseFloat(((stars[1] / noStar) * 100).toFixed(2))
                : 0
            teacher.threeStarPercentage = noStar
                ? parseFloat(((stars[2] / noStar) * 100).toFixed(2))
                : 0
            teacher.fourStarPercentage = noStar
                ? parseFloat(((stars[3] / noStar) * 100).toFixed(2))
                : 0
            teacher.fiveStarPercentage = noStar
                ? parseFloat(((stars[4] / noStar) * 100).toFixed(2))
                : 0
            teacher.noReviews = noReviews
            teacher.rating = parseFloat(rating.toFixed(2))
            await teacher.save()
        })

        this.logger.verbose('Calculate Reviews percentages and Rating of all teachers completed!')
    }

    @Cron('0 */5 * * * *', { timeZone: 'Asia/Ho_Chi_Minh' })
    async calculateNoReviews() {
        this.logger.verbose('Calculate NoReviews of all teachers stars!')
        const teachers = await this.teacherRepository.find({})

        teachers.forEach(async (teacher) => {
            const noReviews = await this.reviewRepository.count({
                where: { teacher: teacher.code },
            })

            teacher.noReviews = noReviews
            await teacher.save()
        })

        this.logger.verbose('Calculate NoReviews of all teachers completed!')
    }
}
