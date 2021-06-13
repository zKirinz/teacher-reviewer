import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ScheduleModule } from '@nestjs/schedule'

import { typeOrmConfig } from './config/typeorm.config'
import { TeachersModule } from './modules/teachers/teachers.module'
import { ReviewsModule } from './modules/reviews/reviews.module'
import { HttpExceptionFilter } from './filters/http-exception.filter'
import { ResponseDataInterceptor } from './interceptors/response.interceptor'

@Module({
    imports: [
        TypeOrmModule.forRoot(typeOrmConfig),
        ScheduleModule.forRoot(),
        TeachersModule,
        ReviewsModule,
    ],
    providers: [
        {
            provide: APP_FILTER,
            useClass: HttpExceptionFilter,
        },
        {
            provide: APP_INTERCEPTOR,
            useClass: ResponseDataInterceptor,
        },
    ],
})
export class AppModule {}
