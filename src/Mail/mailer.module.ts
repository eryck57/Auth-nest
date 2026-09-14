import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import dotenv from 'dotenv';
import { NodemailerService } from './mailer.service';
dotenv.config();
@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.ethereal.email',
        secure: false,
        port: 587,
        auth: {
          user: 'keshaun.spencer68@ethereal.email',
          pass: 'KxHqfZhfusKdd2mqc3',
        },
      },
      defaults: {
        from: 'Gamefication  <gamefication.org@gmail.com',
      },
    }),
  ],
  providers: [NodemailerService],
  exports: [NodemailerService],
})
export class NodemailerModule {}
