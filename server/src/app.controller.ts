import { Get, Controller ,Res} from '@nestjs/common';
import { AppService } from './app.service';
import {join}from 'path';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(@Res() res) {
    res.sendFile(join(__dirname, '../public/index.html'));
  }
  
}
