import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateSubmitterDto } from './dto/create-submitter.dto';
import { SubmitterService } from './submiters.service';
import { Submitter } from './interfaces/submitter.interface';

@Controller('submitters')
export class SubmittersController {
  constructor(private readonly submittersService: SubmitterService) {}

  @Post()
  async create(@Body() createSubmitterDto: CreateSubmitterDto) {
    this.submittersService.create(createSubmitterDto);
  }

  @Get()
  async findAll(): Promise<Submitter[]> {
    return this.submittersService.findAll();
  }
}