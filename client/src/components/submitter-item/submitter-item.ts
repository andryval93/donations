import { Component, Input } from '@angular/core';
import { Submitter } from '../../model/submitter';

@Component({
  selector: 'submitter',
  templateUrl: 'submitter-item.html'
})
export class SubmitterItem {

  @Input() submitterItem: Submitter;

  constructor() {
  }

}
