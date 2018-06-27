import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {TranslateService} from '@ngx-translate/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStepperModule } from 'ionic-stepper';
import { HttpModule } from '@angular/http'; 
import { SubmittersService} from '../services/submitters.service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuditPage } from '../pages/audit/audit';
import { WizardPage } from '../pages/wizard/wizard'
import { SettingsPage } from '../pages/settings/settings';
import { SubmitterPage } from '../pages/submitter/submitter';
import { SubmitterItem } from '../components/submitter-item/submitter-item';
import { SubmitterCardComponent } from '../components/submitter-card/submitter-card.component';
import { SettingsIxnComponent } from '../components/settings-ixn/settings-ixn.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AuditPage,
    WizardPage,
    SettingsPage,
    SubmitterPage,
    SubmitterItem,
    SettingsIxnComponent,
    SubmitterCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicStepperModule,
    HttpModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AuditPage,
    SettingsPage,
    WizardPage,
    SubmitterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TranslateService,
    SubmittersService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
