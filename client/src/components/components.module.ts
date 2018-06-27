import { NgModule } from '@angular/core';
import { SubmitterItem } from './submitter-item/submitter-item';
import { SubmitterCardComponent } from './submitter-card/submitter-card.component';
import { SettingsIxnComponent } from './settings-ixn/settings-ixn.component';

@NgModule({
	declarations: [SubmitterItem,
    SubmitterCardComponent,
    SettingsIxnComponent],
	imports: [],
	exports: [SubmitterItem,
    SubmitterCardComponent,
    SettingsIxnComponent]
})
export class ComponentsModule { }
