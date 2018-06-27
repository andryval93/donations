import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WizardPage } from './wizard';
import { SubmitterCardComponent } from '../../components/submitter-card/submitter-card.component';
import { SettingsIxnComponent } from '../../components/settings-ixn/settings-ixn.component';

@NgModule({
  declarations: [
    WizardPage,
    SubmitterCardComponent,
    SettingsIxnComponent
  ],
  imports: [
    IonicPageModule.forChild(WizardPage),
  ],
  exports: [SubmitterCardComponent,SettingsIxnComponent]
})
export class WizardPageModule {}
