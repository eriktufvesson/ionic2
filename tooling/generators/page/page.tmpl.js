import {Page, NavController} from 'ionic/ionic';
@Page({
  templateUrl: 'build/pages/<%= fileName %>/<%= fileName %>.html',
})
export class <%= jsClassName %> {
  constructor(nav: NavController) {
    this.nav = nav;
  }
}
