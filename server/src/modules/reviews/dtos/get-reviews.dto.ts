import { IsString, IsNotEmpty, IsOptional } from 'class-validator'

export class GetReviewsDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    reviewId: string
}
