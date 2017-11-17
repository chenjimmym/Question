import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QaService } from '../qa.service';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {

  question;
  description;

  constructor(private router: Router, private _qaService: QaService) { }

  ngOnInit() {
  }

  onAddQuestion() {
    console.log('Added Question', this.question);
    console.log('Added Description', this.description);
    this._qaService.addQuestion(this.question, this.description);
    this.router.navigate(['/dash']);
  }

}
