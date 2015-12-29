import {FormBuilder, Validators} from 'angular2/common';
import {Page, NavController} from 'ionic/ionic';


@Page({
  templateUrl: 'build/pages/<%= fileName %>/<%= fileName %>.html'
})
export class <%= jsClassName %> {
  constructor(nav: NavController) {
    this.nav = nav;

    var fb = new FormBuilder();

    this.signupForm = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  doLogin() {
    console.log('Navigating back to the Login Page');
    this.nav.pop()
  }

  doSignup() {
    console.log(this.signupForm.value);

    //this.nav.push(AppPage);
  }

}
