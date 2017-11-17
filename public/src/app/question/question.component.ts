import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QaService } from '../qa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question;
  id;
  constructor(private _route: ActivatedRoute, private _qaService: QaService, private router: Router) { }

  ngOnInit() {
    this._route.paramMap.subscribe( params => {
      console.log('from passing by params',params.get('id'));
      this.id = params.get('id');
    })
    this._qaService.getOneQuestion(this.id, (data)=>{
      this.question = data;
      console.log('got back One Question', this.question);
    })
  }

  onClickAnswer(questionId){
    console.log('answer got clicked', questionId);
    this.router.navigate(['/addanswer', questionId]);
  }

}
