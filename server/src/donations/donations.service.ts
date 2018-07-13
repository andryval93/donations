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
    let a;
    let i: number = 0
    return await this.donetionModel.find().limit(100).exec();
  }

  async amount(donorsID): Promise<number> {
    let sum: number = 0;
    let donor, s;
    await this.donetionModel.collection.createIndex({ "Donor ID": -1 })

    for (let y = 1; y < donorsID.length + 1; y++) {
      await this.donetionModel.find({ 'Donor ID': donorsID[y] }, async (err, donor) => {
        for (let i = 0; i < donor.length; i++) {
          s = await this.donetionModel.find({ 'Donor ID': donor[i]['Donor ID'] });
          sum = sum + s[i]['Donation Amount'];
        }
      })
    }
    return await sum;

    // donor = await this.donetionModel.find({ 'Donor ID': donorID });
    // for (let i = 0; i < donor.length; i++) {
    //   s = await this.donetionModel.find({ 'Donor ID': donor[i]['Donor ID'] });
    //   sum = sum + s[i]['Donation Amount'];
    // }
    // return sum;
  }
}