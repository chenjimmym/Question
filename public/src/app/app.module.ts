import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { QuestionComponent } from './question/question.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { AddanswerComponent } from './addanswer/addanswer.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import{ QaService } from './qa.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    QuestionComponent,
    AddquestionComponent,
    AddanswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [QaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
