import {
  Body,
  Controller,
  Get,
  HttpCode,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth.guard';
import { HomeService } from './home.service';

@Controller()
export class HomeController {
  constructor(private readonly homeservice: HomeService) {}
  @UseGuards(AuthGuard)
  @HttpCode(200)
  @Get('/home')
  async Home(@Req() req: { user: { email: string } }) {
    console.log(req);
    const data = await this.homeservice.getProfileData(req.user.email);
    return 'hello world';
  }
}
