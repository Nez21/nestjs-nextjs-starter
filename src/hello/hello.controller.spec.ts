import { HelloService } from './hello.service'
import { Test, TestingModule } from '@nestjs/testing'
import { HelloController } from './hello.controller'

describe('HelloController', () => {
   let controller: HelloController

   beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
         controllers: [HelloController],
         providers: [HelloService],
      }).compile()

      controller = module.get<HelloController>(HelloController)
   })

   it('should be defined', () => {
      expect(controller).toBeDefined()
   })

   it('should return { message: "Hello World!" }', () => {
      expect(controller.getHello()).toMatchObject({ message: 'Hello World!' })
   })
})
