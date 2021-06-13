import { IsString, IsNotEmpty } from 'class-validator'

export class GetTeacherInfoDto {
    @IsString()
    @IsNotEmpty()
    code: string
}
