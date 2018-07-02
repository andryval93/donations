import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SubmittersModule } from './submitters/submitters.module';
import { DonetionsModule} from './donations/donations.module'
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/Donations'),
    SubmittersModule,
    DonetionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
