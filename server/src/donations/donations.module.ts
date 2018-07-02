import { Module } from '@nestjs/common';
import { DonationsController } from './donations.controller';
import { DonationService } from './donations.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DonazioniSchema } from './schemas/donations.schema';

//MongooseModule.forRoot('mongodb://localhost/test')localconnection

@Module({
  imports: [MongooseModule.forFeature([{name: 'Donazioni',schema: DonazioniSchema}])],
  controllers: [DonationsController],
  providers: [DonationService],
})
export class DonetionsModule {}
