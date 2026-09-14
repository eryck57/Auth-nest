import { Module } from '@nestjs/common';
import { HandleMissionService } from './handleMission.service';
import { HandleMissionController } from './handleMissions.controller';

@Module({
  controllers: [HandleMissionController],
  providers: [HandleMissionService],
})
export class handleMissionModule {}
