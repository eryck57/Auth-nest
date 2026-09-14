import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/gamefication/src/entities/entities/Users';
import { Repository } from 'typeorm';
import { SendEmailService } from 'src/SendEmail/SendEmail.service';
import bcrypt, { hashSync } from 'bcrypt';
import GenerateUsername from '../../utils/generateUsername';
import { CodeConfirmation } from 'src/gamefication/src/entities/entities/CodeConfirmation';
import GenerateCode from 'src/utils/generateCode';
@Injectable()
export class EmailAuthService {
  constructor(
    private readonly sendEmailservice: SendEmailService,
    private readonly jwt: JwtService,
    @InjectRepository(Users) private readonly UserRepository: Repository<Users>,
    @InjectRepository(CodeConfirmation)
    private readonly CodeRepository: Repository<CodeConfirmation>,
  ) {}
  //
  async handleEmail(emailSended: string, sendedPassword: string) {
    const query = await this.UserRepository.findOneBy({ email: emailSended });
    //
    if (!query) {
      return this.ConfirmForCreate(emailSended, sendedPassword);
    }
    const { password, id, username, email } = query;
    //
    if (!password)
      throw new HttpException(
        'There is no password provided',
        HttpStatus.BAD_REQUEST,
      );
    // Compare password
    const comparePassword = bcrypt.compareSync(sendedPassword, password);

    if (!comparePassword)
      throw new HttpException('Password is Wrong', HttpStatus.UNAUTHORIZED);

    const token = this.jwt.sign({
      id,
      email,
      username,
    });

    return {
      isNew: false,
      token: token,
      statusCode: HttpStatus.OK,
    };
  }

  async ConfirmForCreate(registerEmail: string, registerPassword: string) {
    const query = await this.CodeRepository.findOne({
      where: { email: registerEmail },
    });
    const hash = hashSync(registerPassword, 10);
    const newCode = GenerateCode();

    if (!query) {
      const username = GenerateUsername(registerEmail);
      await this.CodeRepository.save({
        email: registerEmail,
        password: hash,
        code: newCode,
        username: username,
      });
      return this.sendEmailservice.SendCodeConfirmation(registerEmail, newCode);
    }

    query.code = newCode;
    query.password = hash;
    const sendCode = await this.CodeRepository.save(query);
    return this.sendEmailservice.SendCodeConfirmation(
      sendCode.email,
      sendCode.code,
    );
  }
}
