import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Teacher } from 'src/entities'
import { TeacherRepository } from './teacher.repository'
import { GetTeacherInfoDto, GetTeachersFilterDto } from './dtos'

@Injectable()
export class TeachersService {
    constructor(
        @InjectRepository(TeacherRepository)
        private teacherRepository: TeacherRepository,
    ) {}

    async search(getTeachersFilterDto: GetTeachersFilterDto): Promise<Teacher[]> {
        return this.teacherRepository.getTeachers(getTeachersFilterDto)
    }

    async getInfo(getTeacherInfoDto: GetTeacherInfoDto): Promise<Teacher> {
        return this.teacherRepository.getTeacher(getTeacherInfoDto)
    }

    async getChart(getTeacherInfoDto: GetTeacherInfoDto): Promise<Teacher> {
        return this.teacherRepository.getChartTeacher(getTeacherInfoDto)
    }
}
