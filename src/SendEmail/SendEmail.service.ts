import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfirmCodeService } from 'src/Authentication/ConfirmCode/ConfirmAccount.service';
import { CodeConfirmation } from 'src/gamefication/src/entities/entities/CodeConfirmation';
import { NodemailerService } from 'src/Mail/mailer.service';
import { Repository } from 'typeorm';
import { ConfirmAccountHtml } from './getHtml';
@Injectable()
export class SendEmailService {
  constructor(private readonly MailService: NodemailerService) {}

  //
  async SendCodeConfirmation(sendedEmail: string, code: string) {
    const html = ConfirmAccountHtml(code);
    this.MailService.sendEmail(sendedEmail, html);
    return {
      statusCode: 200,
      message: 'Email de confirmação enviado com sucesso',
    };
  }

  async SendChangePassword() {}
}
