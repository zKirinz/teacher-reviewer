import { Module, HttpModule } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TeachersModule } from '../teachers/teachers.module'
import { ReviewsController } from './reviews.controller'
import { ReviewsService } from './reviews.service'
import { Review } from 'src/entities'
import { TeacherRepository } from '../teachers/teacher.repository'

@Module({
    imports: [TypeOrmModule.forFeature([Review, TeacherRepository]), TeachersModule, HttpModule],
    controllers: [ReviewsController],
    providers: [ReviewsService],
})
export class ReviewsModule {}
