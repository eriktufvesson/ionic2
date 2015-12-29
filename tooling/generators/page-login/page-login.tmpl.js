import {FormBuilder, Validators} from 'angular2/common';
import {Page, NavController} from 'ionic/ionic';
//import {SignupPage} from '../signup-page/signup-page';


@Page({
  templateUrl: 'build/pages/<%= fileName %>/<%= fileName %>.html'
})
export class <%= jsClassName %> {
  constructor(nav: NavController ) {
    this.nav = nav;

    var fb = new FormBuilder();

    this.loginForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  doLogin() {
    console.log(this.loginForm.value);
  }

  doSignup() {
    this.nav.push(SignupPage); //The SignupPage page needs to be imported at the top
  }

}
