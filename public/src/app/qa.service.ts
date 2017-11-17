import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class QaService {

  loggedUser;

  constructor(private _http: Http) { }

  setLoggedUser(user){
    this.loggedUser = user;
    console.log('Setted LoggedUser in Service', this.loggedUser);
  }

  getLoggedUser(){
    return  this.loggedUser;
  }

  addQuestion(question, description){
    console.log('Received question in service:', question, description);
    this._http.post('/addquestion',{question: question, description: description}).subscribe();
  }

  getAllQuestions(callback){
    this._http.get('/questions').subscribe(
      (response) => {
        callback(response.json())
      },
      (err) => {console.log(err);}
    )
  }

  getOneQuestion(id, callback){
    this._http.get(`/question/${id}`).subscribe(
      (response) => {
        callback(response.json())
      },
      (err) => {console.log(err);}
    )
  }

  addAnswer(id, asker, answer, detail){
    console.log('Received answer in service', asker, answer, detail);
    this._http.post(`/addAnswer/${id}`, {asker: asker, answer: answer, detail: detail}).subscribe();
  }


}
