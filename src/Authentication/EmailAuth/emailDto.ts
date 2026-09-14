import { IsEmail, IsNotEmpty } from 'class-validator';
export class EmailDto {
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
}

export class createAccountDto {
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
}
