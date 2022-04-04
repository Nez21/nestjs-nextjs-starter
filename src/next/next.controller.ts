import { Controller, Get, Res, Req } from '@nestjs/common'
import { Request, Response } from 'express'
import { parse } from 'url'

import { pageRoutes } from './next.routes'
import { NextService } from './next.service'

@Controller('/')
export class NextController {
   constructor(private nextService: NextService) {}

   @Get(pageRoutes)
   public async getPages(@Req() req: Request, @Res() res: Response) {
      await this.nextService.handler(req, res)
   }

   @Get('_next*')
   public async getAssets(@Req() req: Request, @Res() res: Response) {
      const parsedUrl = parse(req.url, true)
      await this.nextService
         .getNextServer()
         .render(req, res, parsedUrl.pathname, parsedUrl.query)
   }

   @Get('favicon.ico')
   public async getFavicon(@Req() req: Request, @Res() res: Response) {
      await this.nextService.handler(req, res)
   }
}
