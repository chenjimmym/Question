import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QaService } from '../qa.service';

@Component({
  selector: 'app-addanswer',
  templateUrl: './addanswer.component.html',
  styleUrls: ['./addanswer.component.css']
})
export class AddanswerComponent implements OnInit {

  loggedUser;
  question;
  id;
  answer;
  detail;

  constructor(private _route: ActivatedRoute, private _qaService: QaService) { }

  ngOnInit() {
    this.loggedUser = this._qaService.getLoggedUser();
    this._route.paramMap.subscribe( params => {
      console.log('add ans by params',params.get('id'));
      this.id = params.get('id');
    })
    this._qaService.getOneQuestion(this.id, (data)=>{
      this.question = data;
      console.log('add ans for One Question', this.question);
    })
  }

  onAddAnswer(){
    console.log('from addanswer form', this.answer);
    console.log('from addanswer form', this.detail);
    this._qaService.addAnswer(this.id, this.loggedUser, this.answer, this.detail);
  }

}
