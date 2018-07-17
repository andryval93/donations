import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DonorsService } from '../../services/donors.service';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the TeacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-teacher',
  templateUrl: 'teacher.html',
})
export class TeacherPage {

  loader;
  public pie_ChartData = [
    ['Insegnante', 'Numero']];

  public pie_ChartOptions = {
  };
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public donorsService: DonorsService, public navParams: NavParams) {
    this.donorsService.getNumberOfTeacher('Yes')
      .subscribe(result => {
        console.log("Result", result)
        this.pie_ChartData.push(['SI', result])
        donorsService.getNumberOfTeacher('No')
          .subscribe(res => {
            this.pie_ChartData.push(['NO', res])
            console.log("res", res)

            this.pie_ChartOptions = {
              title: 'Quantità di insegnanti',
              width: 900,
              height: 500
            };
          })
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherPage');
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait..."
    })
    loader.present();
    this.loader = loader;

  };

}
