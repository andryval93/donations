import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Submitter } from './interfaces/submitter.interface';
import { CreateSubmitterDto } from './dto/create-submitter.dto';

@Injectable()
export class SubmitterService {
  constructor(@InjectModel('Submitter') private readonly submitterModel: Model<Submitter>) { }

  async create(createSubmitterDto: CreateSubmitterDto): Promise<Submitter> {
    const createdSubmitter = new this.submitterModel(createSubmitterDto);
    return await createdSubmitter.save();
  }

  async findAll(): Promise<Submitter[]> {
    return await this.submitterModel.find().exec();
  }
}