import {Directive, ElementRef} from 'angular2/core';

@Directive({
  properties: ['<%= fileName %>'], //Change to be whatever properties you want, ex: <<%= fileName %> value="5">
  inputs: ['<%= fileName %>']
})
export class <%= jsClassName %> {
  constructor(elementRef: ElementRef) {
    this.ele = elementRef;
  }
}
