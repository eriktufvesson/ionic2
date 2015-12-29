import {Component} from 'angular2/core';
import {NgIf} from 'angular2/common';

@Component({
  directives: [NgIf],
  properties: ['value'], //Change to be whatever properties you want, ex: <<%= fileName %> value="5">
  selector: '<%= fileName %>',
  templateUrl: 'build/components/<%= fileName %>/<%= fileName %>.html'
})
export class <%= jsClassName %> {
  constructor() {
    this.nav = nav;
    this.popup = popup;
    this.dataService = dataService;
  }
}
