import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Logger } from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable()
export class ResponseDataInterceptor implements NestInterceptor {
    intercept(_: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map((data) => {
                if (!data) {
                    Logger.verbose(`Response with success message`, 'ResponseDataInterceptor')
                    return {
                        success: true,
                        message: 'Request is handled successfully',
                    }
                }

                Logger.verbose(`Response: \n ${JSON.stringify(data)}`, 'ResponseDataInterceptor')
                return {
                    success: true,
                    message: 'Retrieved data successfully',
                    data: data,
                }
            }),
        )
    }
}
