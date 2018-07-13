import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateDonationsDto } from './dto/create-donations.dto';
import { DonationService } from './donations.service';
import { Donations } from './interfaces/donations.interface';

@Controller('donetions')
export class DonationsController {
  constructor(private readonly donationService: DonationService) {}

  @Post()
  async create(@Body() createDonationsDto: CreateDonationsDto) {
    this.donationService.create(createDonationsDto);
  }

  @Get()
  async findAll(): Promise<Donations[]> {
    return this.donationService.findAll();
  }
  @Get(':donorID')
  async amount(@Param('donorID')donorID): Promise<number> {
    let array = donorID.split(",");
    return this.donationService.amount(array);
  }
}