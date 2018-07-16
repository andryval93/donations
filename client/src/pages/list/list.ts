import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DonorsService } from '../../services/donors.service';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  gridItem;
  loader;
  public bar_ChartData = [];

  public bar_ChartOptions = {
  };

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams, public donorsService: DonorsService, ) {
    // If we navigated to this page, we will have an item available as a nav param
    this.presentLoading();
    this.donorsService.getValueDonetions()
      .subscribe(result => {
        console.log("Result", result);
        this.bar_ChartData = [
          ['Anni', 'Donazioni'],
          ['2013', result[0][0].OfferteTotali],
          ['2014', result[1][0].OfferteTotali],
          ['2015', result[2][0].OfferteTotali]];

        this.bar_ChartOptions = {
          title: 'Donazioni negli anni',
          chartArea: { width: '50%' },
          hAxis: {
            title: 'Donazioni',
            minValue: 0,
            textStyle: {
              bold: true,
              fontSize: 12,
              color: '#4d4d4d'
            },
            titleTextStyle: {
              bold: true,
              fontSize: 18,
              color: '#4d4d4d'
            }
          },
          vAxis: {
            title: 'Anni',
            textStyle: {
              fontSize: 14,
              bold: true,
              color: '#848484'
            },
            titleTextStyle: {
              fontSize: 14,
              bold: true,
              color: '#848484'
            }
          }
        }
        this.loader.dismiss();
      });
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait..."
    })
    loader.present();
    this.loader = loader;

  };
}
