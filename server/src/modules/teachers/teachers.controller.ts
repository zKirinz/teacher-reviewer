import { Controller, Get, Logger, Query, ValidationPipe } from '@nestjs/common'
import { TeachersService } from './teachers.service'
import { Teacher } from 'src/entities'
import { GetTeacherInfoDto, GetTeachersFilterDto } from './dtos'

@Controller('teachers')
export class TeachersController {
    private logger = new Logger('TeachersController')

    constructor(private teachersService: TeachersService) {}

    @Get('/')
    search(@Query(ValidationPipe) getTeachersFilterDto: GetTeachersFilterDto): Promise<Teacher[]> {
        this.logger.verbose(`Someone is searching teacher ${getTeachersFilterDto.code}`)
        return this.teachersService.search(getTeachersFilterDto)
    }

    @Get('/info')
    getInfo(@Query(ValidationPipe) getTeacherInfoDto: GetTeacherInfoDto): Promise<Teacher> {
        this.logger.verbose(`Someone is fetching teacher ${getTeacherInfoDto.code} information`)
        return this.teachersService.getInfo(getTeacherInfoDto)
    }

    @Get('/chart')
    getChart(@Query(ValidationPipe) getTeacherInfoDto: GetTeacherInfoDto): Promise<Teacher> {
        this.logger.verbose(
            `Someone is fetching teacher ${getTeacherInfoDto.code} chart information`,
        )
        return this.teachersService.getChart(getTeacherInfoDto)
    }
}
