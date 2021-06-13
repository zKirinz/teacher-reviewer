import { NestFactory } from '@nestjs/core'
import { Logger } from '@nestjs/common'
import { AppModule } from './app.module'
import * as config from 'config'

async function bootstrap() {
    const serverConfig = config.get('server')
    const logger = new Logger('bootstrap')
    const app = await NestFactory.create(AppModule)
    app.setGlobalPrefix('/api/v1')

    if (process.env.NODE_ENV === 'production') {
        app.enableCors({
            origin: serverConfig.origin,
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        })
        logger.log(`Accepting requests from origin "${serverConfig.origin}"`)
    } else {
        app.enableCors({ methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'] })
    }

    const port = process.env.PORT || serverConfig.port
    await app.listen(port)
    logger.log(`Application is listening on port ${port}`)
}
bootstrap()
