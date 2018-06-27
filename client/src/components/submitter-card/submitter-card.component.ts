import { Component, Input } from '@angular/core';
import { SubmitterCard } from '../../model/submitterCard';

@Component({
  selector: 'submitter-card',
  templateUrl: 'submitter-card.component.html'
})
export class SubmitterCardComponent {

  @Input() submitterCardItems: SubmitterCard;

  constructor() {
    
  }

}
