import { Controller, Get, Header } from '@nestjs/common'
import { HelloService } from './hello.service'

@Controller('hello')
export class HelloController {
   constructor(private readonly helloService: HelloService) {}

   @Get()
   @Header('content-type', 'application/json')
   getHello(): { message: string } {
      return this.helloService.getHello()
   }
}
