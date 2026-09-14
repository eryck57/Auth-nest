import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { OAuth2Client } from 'google-auth-library';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/gamefication/src/entities/entities/Users';
import { Repository } from 'typeorm';
import GenerateUsername from 'src/utils/generateUsername';
@Injectable()
export class HandleGoogleService {
  private googleClient: OAuth2Client;
  constructor(
    private readonly jwtservice: JwtService,
    @InjectRepository(Users) private readonly userRepository: Repository<Users>,
  ) {
    this.googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT);
  }
  async handleGoogle(idToken: string) {
    const data = await this.googleClient.verifyIdToken({
      idToken: idToken,
      audience: process.env.GOOGLE_CLIENT,
    });
    //
    const payload = data.getPayload();
    //
    if (!payload)
      throw new HttpException('Token não autorizado', HttpStatus.UNAUTHORIZED);

    const { email, given_name } = payload;
    if (!email)
      throw new HttpException('Email was undefined', HttpStatus.BAD_GATEWAY);
    //
    const query = await this.userRepository.findOneBy({ email: email });
    //
    const token = this.jwtservice.sign({
      email: email,
      username: given_name,
    });

    if (!query) {
      const username = GenerateUsername(email);
      await this.userRepository.save({
        email: email,
        username: username,
      });
      return {
        isNew: true,
        statusCode: HttpStatus.CREATED,
        token: token,
      };
    }

    return {
      isNew: false,
      statusCode: HttpStatus.OK,
      token: token,
    };
  }
}
