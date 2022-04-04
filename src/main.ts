import { RequestMethod } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { pageRoutes } from './next/next.routes'
import { AppModule } from './app.module'

async function bootstrap() {
   const app = await NestFactory.create(AppModule)
   app.setGlobalPrefix('api', {
      exclude: [
         ...pageRoutes.map((el) => {
            return {
               path: el,
               method: RequestMethod.GET,
            }
         }),
         { path: '/_next*', method: RequestMethod.GET },
         { path: '/favicon.ico', method: RequestMethod.GET },
      ],
   })
   await app.listen(3000)
}
bootstrap()
