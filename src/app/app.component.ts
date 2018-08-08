import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerService } from './server.service';
import { NgForm } from '@angular/forms';
import { Data } from '../app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    userdata:Data;
  public obj:Data;
  // constructor(private httpClient: HttpClient) {
   
  // }
  // sayHi() {
  //   this.httpClient.get('http://127.0.0.1:5000/index').subscribe(data => {
      
  //     console.log(data);
  //     console.log("hello");
  //   })
  // }
  constructor(private httpClient: HttpClient,private service:ServerService){
     this.obj = new Data();
     this.userdata=this.service.getServices();
  }
  sayHi() {
    this.httpClient.get('http://127.0.0.1:5000/index').subscribe(data => {
      console.log(data);
    });
    
    }

    login(){
      
      const DATA = {
        'username':this.userdata.username,
        'email':this.userdata.email
      }
      console.log(DATA);
      this.httpClient.post('http://127.0.0.1:5000/login',DATA).subscribe(data => {
            
            console.log(data);
            console.log("hello");
          })
      }
  onSubmit(form:NgForm){
    
    
    this.service.submit(form); 
    
  }
  onReset(vendorform:NgForm){
    vendorform.reset();
  }
  
  }
  
 
  

