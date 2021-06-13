import { IsString, IsInt, Min, Max, MaxLength, IsNotEmpty } from 'class-validator'

export class ReviewDto {
    @IsInt()
    @Min(1)
    @Max(5)
    rating: number

    @IsString()
    @IsNotEmpty()
    @MaxLength(300)
    content: string

    @IsString()
    @IsNotEmpty()
    token: string
}
