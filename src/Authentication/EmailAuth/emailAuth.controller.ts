import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { EmailAuthService } from './emailAuth.service';
import { EmailDto } from './emailDto';
@Controller('/auth')
export class EmailAuthController {
  constructor(private readonly emailAuth: EmailAuthService) {}
  @Post('email')
  @HttpCode(HttpStatus.OK)
  async handleAuthEmail(
    @Body()
    body: EmailDto,
  ) {
    const { email, password } = body;
    console.log(email);
    return await this.emailAuth.handleEmail(email, password);
  }
}
