import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  public username:String="Obama"
  public redStyle="MyStyle1"
  public complexStyle={
    "MyStyle1":true,
    "MyStyle2":true,
    "MyStyle3":true,
  }
  processSignup(fullName:string, userName:string)
  {
    alert(fullName+"\n"+userName)
  }
}
