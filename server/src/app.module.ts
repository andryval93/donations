import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SubmittersModule } from './submitters/submitters.module';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://andrea:Welcome2018@ds217921.mlab.com:17921/connector_dashboard'),
    SubmittersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
