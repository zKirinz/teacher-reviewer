import { IsString, IsNotEmpty } from 'class-validator'

export class GetTeachersFilterDto {
    @IsString()
    @IsNotEmpty()
    code: string
}
