import { Component, OnInit } from '@angular/core';
import { QaService } from '../qa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  loggedUser;
  questions;

  constructor(private _qaService: QaService, private router: Router) { }

  ngOnInit() {
    this.loggedUser = this._qaService.getLoggedUser();
    this._qaService.getAllQuestions((data)=>{
      this.questions = data;
      console.log('got back to dash', this.questions);
    })
  }

  onClickShow(questionId){
    console.log('show got clicked, id:', questionId);
    this.router.navigate(['/question', questionId]);
  }

  onClickAnswer(questionId){
    console.log('answer got clicked', questionId);
    this.router.navigate(['/addanswer', questionId]);
  }

}
