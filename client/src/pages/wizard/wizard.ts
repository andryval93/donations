import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SubmitterCard } from '../../model/submitterCard';
import { SettingsIxn } from '../../model/settingsIxn'; 
import {SettingsIxnComponent } from '../../components/settings-ixn/settings-ixn.component';
import { FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-wizard',
  templateUrl: 'wizard.html',
})
export class WizardPage {

  @ViewChild(SettingsIxnComponent) ixnComponent: SettingsIxnComponent;
  activeForm: boolean;
  mode: string;
  icon: string;
  submitterCard_items: SubmitterCard[] = [
    new SubmitterCard("gms", "Pure Engage", "rgba(255,78,20,0.1)", "rgba(255,78,20,0.4)", "rgb(255,78,20)", "../../assets/vendor/pureEngageIcon.jpg", "GMS", "Il submitter GMS appartiene alla famiglia Pure Engage", "pure-engage", false),
    new SubmitterCard("ixn", "Pure Engage", "rgba(255,78,20,0.1)", "rgba(255,78,20,0.4)", "rgb(255,78,20)", "../../assets/vendor/pureEngageIcon.jpg", "IXN", "Il submitter IXN appartiene alla famiglia Pure Engage", "pure-engage", false),
    new SubmitterCard("iwd", "Pure Engage", "rgba(255,78,20,0.1)", "rgba(255,78,20,0.4)", "rgb(255,78,20)", "../../assets/vendor/pureEngageIcon.jpg", "IWD", "Il submitter IWD appartiene alla famiglia Pure Engage", "pure-engage", false),
    new SubmitterCard("salesfoce", "Salesforce", "rgba(72,138,255,0.1)", "rgba(72,138,255,0.4)", "rgb(72,138,255)", "../../assets/vendor/download.png", "Salesforce", "Il submitter Salesforce appartiene all'omonima famiglia", "primary", false),
    new SubmitterCard("purecloud1", "Pure Cloud", "rgba(255,78,20,0.1)", "rgba(255,78,20,0.4)", "rgb(255,78,20)", "../../assets/vendor/pureEngageIcon.jpg", "Pure Cloud", "Il submitter Pure Cloud appartiene all'omonima famiglia", "pure-engage", false),
    new SubmitterCard("purecloud2", "Pure Cloud", "rgba(255,78,20,0.1)", "rgba(255,78,20,0.4)", "rgb(255,78,20)", "../../assets/vendor/pureEngageIcon.jpg", "Pure Cloud", "Il submitter Pure Cloud appartiene all'omonima famiglia", "pure-engage", false)
  ];

  settingsIxnitems: SettingsIxn = new SettingsIxn("","",undefined,"","",undefined,undefined,undefined,false)
  settingsIxnitems2: SettingsIxn;
  currentCardItemSelected: SubmitterCard;
  cardItemSummary: SubmitterCard;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {
    this.mode = "horizontal"
    this.icon = "md-checkmark-circle"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WizardPage');
  }

  selectChange(e) {
    console.log("selectChange",e);

    if(e === 1){
      var clone = Object.create(this.currentCardItemSelected);
      this.cardItemSummary = clone;
      this.cardItemSummary.$buttonVisibility=false;
    }

    if(e === 2){
      this.settingsIxnitems2 = this.ixnComponent.values();
    }
    
    console.log("Prova",this.ixnComponent.values())
  }


  selectedCard(id) {
    // controllo se ho selezionato lo stesso elemento
    if (!(this.currentCardItemSelected !== undefined && this.currentCardItemSelected.$id === id)) {
      for (let submitterCardItem of this.submitterCard_items) {
        if (submitterCardItem.$id === id) {

          //change color new card
          let oldColr = submitterCardItem.$color;
          submitterCardItem.$color = submitterCardItem.$selectedColor;
          submitterCardItem.$selectedColor = oldColr;
          submitterCardItem.$buttonVisibility = true;

          //restore old card
          if (this.currentCardItemSelected != undefined) {
            let oldCurrentColor = this.currentCardItemSelected.$selectedColor
            this.currentCardItemSelected.$selectedColor = this.currentCardItemSelected.$color
            this.currentCardItemSelected.$color = oldCurrentColor;
            this.currentCardItemSelected.$buttonVisibility = false;
          }

          this.currentCardItemSelected = submitterCardItem

        }
      }
    }
  }

}
