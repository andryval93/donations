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
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams, public donorsService: DonorsService, ) {
    // If we navigated to this page, we will have an item available as a nav param
    this.presentLoading();
    this.donorsService.getValueDonetions()
      .subscribe(result => {
        console.log("Result", result);
        this.gridItem = result[0]
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
