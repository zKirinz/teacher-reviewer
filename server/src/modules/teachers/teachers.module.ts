import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TeacherRepository } from './teacher.repository'
import { TeachersController } from './teachers.controller'
import { TeachersService } from './teachers.service'

@Module({
    imports: [TypeOrmModule.forFeature([TeacherRepository])],
    controllers: [TeachersController],
    providers: [TeachersService],
    exports: [TeachersService],
})
export class TeachersModule {}
