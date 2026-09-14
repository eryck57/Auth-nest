import { Body, Controller, Post } from '@nestjs/common';
import { HandleGoogleService } from './handleGoogle.service';

@Controller('auth')
export class handleGoogleController {
  constructor(private readonly AuthGoogleService: HandleGoogleService) {}
  @Post('google')
  HandleAuthGoogle(@Body() body: { idToken: string }) {
    const { idToken } = body;
    return this.AuthGoogleService.handleGoogle(idToken);
  }
}
