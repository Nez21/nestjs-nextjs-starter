import * as request from 'supertest'
import { Test } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'

import { HelloController } from '~/src/hello/hello.controller'
import { HelloService } from '~/src/hello/hello.service'

describe('HelloController (e2e)', () => {
   let app: INestApplication

   beforeAll(async () => {
      const moduleFixture = await Test.createTestingModule({
         controllers: [HelloController],
         providers: [HelloService],
      }).compile()

      app = moduleFixture.createNestApplication()
      app.setGlobalPrefix('api')
      await app.init()
   })

   it('/api/hello (GET)', () => {
      return request(app.getHttpServer())
         .get('/api/hello')
         .expect(200)
         .expect({ message: 'Hello World!' })
   })
})
