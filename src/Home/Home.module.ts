import { Module } from '@nestjs/common';
import { HomeController } from './Home.controller';
import { HomeService } from './home.service';

@Module({
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
