import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CodeConfirmation } from 'src/gamefication/src/entities/entities/CodeConfirmation';
import { Repository } from 'typeorm';
import { Users } from 'src/gamefication/src/entities/entities/Users';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import GenerateCode from 'src/utils/generateCode';
import { SendEmailService } from 'src/SendEmail/SendEmail.service';
import CalcTimeDifference from 'src/utils/calcTimeDif';

@Injectable()
export class ConfirmCodeService {
  constructor(
    @InjectRepository(CodeConfirmation)
    private readonly CodeRepository: Repository<CodeConfirmation>,
    @InjectRepository(Users) private readonly UserRepository: Repository<Users>,
    private readonly jwt: JwtService,
    private readonly SendEmail: SendEmailService,
  ) {}
  async ConfirmAccount(emailConfirmation: string, codeConfirmation: string) {
    //
    const query = await this.CodeRepository.findOneBy({
      email: emailConfirmation,
      code: codeConfirmation,
    });

    //
    if (!query) throw new HttpException('Not found', HttpStatus.NOT_FOUND);

    //
    const { code, password, updatedAt, email, username } = query;
    //

    const minutesDiff = CalcTimeDifference(updatedAt);
    //
    if (Math.trunc(minutesDiff) > 5)
      throw new HttpException('Code expired', HttpStatus.REQUEST_TIMEOUT);

    //
    const saveUser = await this.UserRepository.save({
      email: email,
      password: password,
      username: username,
    });

    await this.CodeRepository.delete({ email: email });
    const token = await this.jwt.signAsync({
      email: saveUser.email,
      username: saveUser.username,
    });
    return {
      token: token,
      statusCode: HttpStatus.CREATED,
      message: 'Welcome to LevelUp - Rpg studies',
    };
  }

  async ResendCode(SendedEmail: string, SendedPassword: string) {
    const query = await this.CodeRepository.findOneBy({ email: SendedEmail });

    if (!query)
      throw new HttpException('Email not Found', HttpStatus.NOT_FOUND);
    const { password, id } = query;
    //
    const match = compareSync(SendedPassword, password);
    if (!match)
      throw new HttpException('Wrong Password', HttpStatus.UNAUTHORIZED);
    const newCode = GenerateCode();
    query.code = newCode;
    await this.CodeRepository.save({
      id: query.id,
      code: newCode,
    });
    return this.SendEmail.SendCodeConfirmation(SendedEmail, newCode);
  }

  DeleteAccount() {}
}
