import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { SecurityQuestionService } from '../Services/security-question.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  securityQuestion=null;
  email:string;
  emailControl:FormControl=new FormControl('',[Validators.required,Validators.email]);
  constructor(private securityQuestionServe:SecurityQuestionService) { }

  ngOnInit() {
  }

  findSecurityQuestion(){
    if(this.emailControl.value){
      this.securityQuestionServe.findBy(this.emailControl.value).subscribe((securityQuestion)=>{
        this.securityQuestion=securityQuestion.question;
      })
    }
  }

}
