import { InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common'
import { EntityRepository, Repository } from 'typeorm'
import { Teacher } from 'src/entities'
import { GetTeacherInfoDto, GetTeachersFilterDto } from './dtos'

const noTeachers = 5

@EntityRepository(Teacher)
export class TeacherRepository extends Repository<Teacher> {
    private logger = new Logger('TeacherRepository')

    async getTeachers(getTeachersFilterDto: GetTeachersFilterDto): Promise<Teacher[]> {
        const { code } = getTeachersFilterDto
        if (!code) {
            return []
        }

        const query = this.createQueryBuilder('teacher')
        query
            .select(['teacher.code', 'teacher.noReviews', 'teacher.rating'])
            .where('LOWER(teacher.code) LIKE :search', {
                search: `%${code.toLowerCase()}%`,
            })
            .take(noTeachers)

        try {
            const teachers = await query.getMany()
            return teachers
        } catch (error) {
            this.logger.error(`Failed to search teachers ${code}`, error.stack)
            throw new InternalServerErrorException()
        }
    }

    async getTeacher(getTeacherInfoDto: GetTeacherInfoDto): Promise<Teacher> {
        const { code } = getTeacherInfoDto

        const query = this.createQueryBuilder('teacher')
        query
            .select(['teacher.code', 'teacher.noReviews', 'teacher.rating'])
            .where('LOWER(teacher.code) = :search', {
                search: code.toLowerCase(),
            })

        try {
            const teacher = await query.getOne()
            if (!teacher) {
                throw new NotFoundException(`Cannot find teacher ${code}`)
            }
            return teacher
        } catch (error) {
            this.logger.error(`Failed to get teacher ${code}`, error.stack)
            if (error instanceof NotFoundException) {
                throw error
            }
            throw new InternalServerErrorException()
        }
    }

    async getChartTeacher(getTeacherInfoDto: GetTeacherInfoDto): Promise<Teacher> {
        const { code } = getTeacherInfoDto

        const query = this.createQueryBuilder('teacher')
        query
            .select([
                'teacher.noReviews',
                'teacher.rating',
                'teacher.oneStarPercentage',
                'teacher.twoStarPercentage',
                'teacher.threeStarPercentage',
                'teacher.fourStarPercentage',
                'teacher.fiveStarPercentage',
            ])
            .where('teacher.code = :search', {
                search: code,
            })

        try {
            const teacher = await query.getOne()
            if (!teacher) {
                throw new NotFoundException(`Cannot find teacher ${code}`)
            }
            return teacher
        } catch (error) {
            this.logger.error(`Failed to get teacher ${code}`, error.stack)
            if (error instanceof NotFoundException) {
                throw error
            }
            throw new InternalServerErrorException()
        }
    }
}
