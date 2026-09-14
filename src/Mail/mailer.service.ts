import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class NodemailerService {
  constructor(private readonly Mailer: MailerService) {}

  async sendEmail(to: string, html: string) {
    try {
      const res = await this.Mailer.sendMail({
        from: 'Gamefication <gamefication.org@gmail.com>',
        html: html,
        to: to,
        subject: 'No-reply',
      });

      if (res && res.rejected && res.rejected.length > 0) {
        throw new Error(
          `E-mail rejeitado pelo provedor de destino: ${res.rejected.join(', ')}`,
        );
      }

      return {
        response: res,
        statusCode: HttpStatus.OK,
      };
    } catch (err) {
      console.error('Erro crítico no envio de e-mail:', err);

      throw new HttpException(
        'Internal server error while sending email',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
