import { Module } from '@nestjs/common';
import { SubmittersController } from './submitters.controller';
import { SubmitterService } from './submiters.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SubmitterSchema } from './schemas/submitter.schema';

//MongooseModule.forRoot('mongodb://localhost/test')localconnection

@Module({
  imports: [MongooseModule.forFeature([{name: 'Submitter',schema: SubmitterSchema}])],
  controllers: [SubmittersController],
  providers: [SubmitterService],
})
export class SubmittersModule {}
