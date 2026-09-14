import { Module } from '@nestjs/common';
import { AuthModule } from './Authentication/auth.Module';
import { JwtModule } from '@nestjs/jwt';
import dotenv from 'dotenv';
import { GroqServices } from './AI/groq.service';
import { HomeModule } from './Home/Home.module';
import { handleMissionModule } from './handleMissions/handleMission.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './gamefication/src/entities/entities/Users';
import { CodeConfirmation } from './gamefication/src/entities/entities/CodeConfirmation';
import { Stats } from './gamefication/src/entities/entities/Stats';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
dotenv.config();

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: './',
      serveRoot: '/static',
    }),
    JwtModule.register({
      global: true,
      secret: process.env.SECRET_TOKEN,
      signOptions: { expiresIn: '36500d' },
    }),
    handleMissionModule,
    AuthModule,
    HomeModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'gamefication',
      entities: [Users, CodeConfirmation, Stats],
      synchronize: false,
    }),

    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 60,
      },
    ]),
  ],
  controllers: [],
  providers: [GroqServices, { provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class AppModule {}
