import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { HelloController } from './hello/hello.controller'
import { NextModule } from './next/next.module'
import { HelloService } from './hello/hello.service'

@Module({
   imports: [
      NextModule,
      ConfigModule.forRoot({
         isGlobal: true,
      }),
   ],
   controllers: [HelloController],
   providers: [HelloService],
})
export class AppModule {}
