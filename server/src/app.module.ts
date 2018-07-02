import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SubmittersModule } from './submitters/submitters.module';
import { DonetionsModule} from './donations/donations.module'
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DonorsModule} from './donors/donors.module'


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/Donazioni'),
    SubmittersModule,
    DonetionsModule,
    DonorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
