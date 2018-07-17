import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateDonorsDto } from './dto/create-donors.dto';
import { DonorsService } from './donors.service';
import { Donors } from './interfaces/donors.interface';

@Controller('donors')
export class DonorsController {
  constructor(private readonly donorsService: DonorsService) {}

  @Post()
  async create(@Body() createDonationsDto: CreateDonorsDto) {
    this.donorsService.create(createDonationsDto);
  }

  @Get()
  async findAll(): Promise<Donors[]> {
    return this.donorsService.findAll();
  }
  @Get(':isTeacher/countTheacherofCity')
  async CountTheacher(@Param ('isTeacher') isTeacher): Promise<number> {
    return this.donorsService.countTheacher(isTeacher);
  }

  @Get (':state')
  async AmoutState(@Param('state')state): Promise<any>{
    return this.donorsService.AmoutState(state);
  }

}