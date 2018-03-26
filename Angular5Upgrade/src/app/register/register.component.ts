import { Component, OnInit } from '@angular/core';
import { SecurityQuestionService } from '../Services/security-question.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  selected;
  securityQuestions;
  constructor(private securityQuestionsServe:SecurityQuestionService) {
   }

  ngOnInit() {
    this.securityQuestionsServe.find().subscribe((securityQuestions:any)=>{
       console.log(securityQuestions);
       this.securityQuestions=securityQuestions.data;
    });
  }

}
