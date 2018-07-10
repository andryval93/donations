import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Donations } from './interfaces/donations.interface';
import { CreateDonationsDto } from './dto/create-donations.dto';

@Injectable()
export class DonationService {
  constructor(@InjectModel('Donation') private readonly donetionModel: Model<Donations>) { }

  async create(createDonationsDto: CreateDonationsDto): Promise<Donations> {
    const createdDonation = new this.donetionModel(createDonationsDto);
    return await createdDonation.save();
  }

  async findAll(): Promise<Donations[]> {
    return await this.donetionModel.find().limit(100).exec();
  }

  async amount(donorID): Promise<number> {
    let sum;
    for (let i=0;i<donorID.length;i++){
      this.donetionModel.find({'Donor ID':donorID[i]['Donor ID']},{_id:0,'Donation Amount':1},(err,s)=>{
        sum=s[i]['Donation Amount'];
      }
    )
    }
    return sum;
  }
 
}