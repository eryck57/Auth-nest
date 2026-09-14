import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth.guard';
import { HandleMissionService } from './handleMission.service';

@Controller()
export class HandleMissionController {
  constructor(private readonly handleMissionservice: HandleMissionService) {}
  @UseGuards(AuthGuard)
  @Post('/handleMission')
  async handleMissionCompleted(@Req() req: any, @Body() body: any) {
    const userId = req.user.id;
  }

  @Get('/getfullmissions')
  getFullMissions() {}
}
