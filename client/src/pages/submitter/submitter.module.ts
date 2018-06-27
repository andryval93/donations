import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubmitterPage } from './submitter';
import { SubmitterItem } from '../../components/submitter-item/submitter-item';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SubmitterPage,
    SubmitterItem
  ],
  imports: [
    IonicPageModule.forChild(SubmitterPage),
    IonicModule
  ],
  exports: [SubmitterItem]
})
export class SubmitterPageModule {
}
