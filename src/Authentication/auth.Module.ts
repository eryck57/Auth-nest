import { Module } from '@nestjs/common';
import { NodemailerService } from 'src/Mail/mailer.service';
import { NodemailerModule } from 'src/Mail/mailer.module';
import { ConfirmCodeService } from './ConfirmCode/ConfirmAccount.service';
import { ConfirmCodeController } from './ConfirmCode/ConfirmAccount.controller';
import { handleGoogleController } from './GoogleAuth/handleGoogle.controller';
import { EmailAuthController } from './EmailAuth/emailAuth.controller';
import { EmailAuthService } from './EmailAuth/emailAuth.service';
import { HandleGoogleService } from './GoogleAuth/handleGoogle.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/gamefication/src/entities/entities/Users';
import { CodeConfirmation } from 'src/gamefication/src/entities/entities/CodeConfirmation';
import { JwtService } from '@nestjs/jwt';
import { SendEmailService } from 'src/SendEmail/SendEmail.service';
@Module({
  exports: [],
  controllers: [
    EmailAuthController,
    ConfirmCodeController,
    handleGoogleController,
  ],
  providers: [
    NodemailerService,
    ConfirmCodeService,
    EmailAuthService,
    HandleGoogleService,
    SendEmailService,
  ],
  imports: [
    NodemailerModule,
    TypeOrmModule.forFeature([Users, CodeConfirmation]),
  ],
})
export class AuthModule {}
