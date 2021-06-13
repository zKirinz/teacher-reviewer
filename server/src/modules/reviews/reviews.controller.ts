import { TeachersService } from './../teachers/teachers.service'
import { Body, Controller, Get, Logger, Param, Post, Query, ValidationPipe } from '@nestjs/common'
import { ReviewsService } from './reviews.service'
import { Review } from 'src/entities'
import { GetReviewsDto, ReviewDto } from './dtos'

@Controller('reviews')
export class ReviewsController {
    private logger = new Logger('ReviewsController')

    constructor(private reviewsService: ReviewsService, private teachersService: TeachersService) {}

    @Get('/:code')
    async getReviews(
        @Query(ValidationPipe) getReviewsDto: GetReviewsDto,
        @Param('code') code,
    ): Promise<Review[]> {
        this.logger.verbose(`Someone is fetching teacher ${code} reviews`)

        const teacher = await this.teachersService.getInfo({ code: code })
        return this.reviewsService.getReviews(teacher, getReviewsDto)
    }

    @Post('/:code')
    async review(@Param('code') code, @Body(ValidationPipe) reviewDto: ReviewDto): Promise<void> {
        this.logger.verbose(
            `Someone has just reviewed teacher ${code} and rating ${reviewDto.rating} with content ${reviewDto.content}`,
        )

        const teacher = await this.teachersService.getInfo({ code: code })
        return this.reviewsService.review(teacher, reviewDto)
    }
}
