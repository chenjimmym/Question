import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QaService } from '../qa.service';
import { Router } from '@angular/router';

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

  constructor(private _route: ActivatedRoute, private _qaService: QaService, private router: Router) { }

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
    this._qaService.addAnswer(this.id, this.loggedUser, this.answer, this.detail);
    this.router.navigate(['/question', this.id]);
  }

}
