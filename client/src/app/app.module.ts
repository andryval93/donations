import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {GoogleChart} from '../directives/angular2-google-chart.directive';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TeacherPage } from '../pages/teacher/teacher';
import { ListPage } from '../pages/list/list';
import { DonorsService } from '../services/donors.service'
import { HttpModule } from '@angular/http'; 

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GoogleChart,
    TeacherPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TeacherPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DonorsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
