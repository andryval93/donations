import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Submitter } from '../../model/submitter';
import { WizardPage } from '../wizard/wizard';
import { SubmittersService } from '../../services/submitters.service';

@IonicPage()
@Component({
  selector: 'page-submitter',
  templateUrl: 'submitter.html',
})
export class SubmitterPage {

  submitter_items: Submitter[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public submittersService: SubmittersService) {
    submittersService.getSubmitters()
      .subscribe(result => {
        let res = result[0];
        let submitter = new Submitter(res.icon,res.type,res.name,res.description,res.lastEdit);
        this.submitter_items.push(submitter)
      });

  }

  goToOtherPage() {
    this.navCtrl.push(WizardPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmitterPage');
  }

}
