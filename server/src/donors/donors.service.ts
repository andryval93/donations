import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Donors } from './interfaces/donors.interface';
import { CreateDonorsDto } from './dto/create-donors.dto';

@Injectable()
export class DonorsService {
  constructor(@InjectModel('Donor') private readonly donorsModel: Model<Donors>) { }

  async create(createDonorsDto: CreateDonorsDto): Promise<Donors> {
    const createdDonors = new this.donorsModel(createDonorsDto);
    return await createdDonors.save();
  }

  async findAll(): Promise<Donors[]> {
    return await this.donorsModel.find().limit(100).exec();
  }
}