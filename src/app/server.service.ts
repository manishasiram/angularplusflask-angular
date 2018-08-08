import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { NgForm } from '@angular/forms';
import { Data } from '../app.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServerService {
  submitted = false;
  f:NgForm;
  data:Data;
  constructor() { 
    this.data=new Data;
  }
  submit(loginform:NgForm){
    this.submitted=true;
    this.f = loginform;
    
    this.data.username=loginform.value.username;
    this.data.email=loginform.value.email;
    console.log(this.data);
    
  }
  getServices(){
    return this.data;
  }
  getsubmit(){
    return this.submitted;
  }
}
