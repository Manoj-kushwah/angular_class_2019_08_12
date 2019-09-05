import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @ViewChild('formSignUp', {static: true}) private signUp: NgForm;

  constructor() { }

  ngOnInit() {
    console.log('SignUpComponent ngOnInit signUp:',this.signUp);
  }

  public onSubmitSignUp(event: any): boolean{
    console.log("SignUpComponent onSubmitSignUp event: ", event);
    console.log("SignUpComponent onSubmitSignUp signUp: ", this.signUp);
    console.log("SignUpComponent onSubmitSignUp signUp value: ", this.signUp.value);
    return false;
  }

}
