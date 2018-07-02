import { Module } from '@nestjs/common';
import { DonorsController } from './donors.controller';
import { DonorsService } from './donors.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DonatoriSchema } from './schemas/donors.schema';

//MongooseModule.forRoot('mongodb://localhost/test')localconnection

@Module({
  imports: [MongooseModule.forFeature([{name: 'Donor',schema: DonatoriSchema}])],
  controllers: [DonorsController],
  providers: [DonorsService],
})
export class DonorsModule {}