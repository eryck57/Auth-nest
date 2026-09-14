import { Body, Controller, Post } from '@nestjs/common';
import { ConfirmCodeService } from './ConfirmAccount.service';
import { ConfirmEmailDto } from './confirmEmail.dto';
import { EmailDto } from '../EmailAuth/emailDto';
import { Throttle } from '@nestjs/throttler';

@Controller('confirmcode')
export class ConfirmCodeController {
  constructor(private readonly ConfirmationService: ConfirmCodeService) {}
  @Post('create-account')
  async confirmCode(@Body() body: ConfirmEmailDto) {
    const { email, code } = body;
    const fetch = await this.ConfirmationService.ConfirmAccount(email, code);
    return fetch;
  }

  @Post('resend-code')
  @Throttle({ default: { limit: 1, ttl: 30000 } })
  async resendConfirmationCode(@Body() body: EmailDto) {
    const { email, password } = body;
    return this.ConfirmationService.ResendCode(email, password);
  }
}
