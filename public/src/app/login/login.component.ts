import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QaService } from './../qa.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedUser;

  constructor(private router: Router, private _qaService: QaService) { }

  ngOnInit() {
  }

  onLogin(){
    console.log('onLogin', this.loggedUser);
    this._qaService.setLoggedUser(this.loggedUser);
    this.router.navigate(['/dash']);
  }

}
