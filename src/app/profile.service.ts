import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Profile } from "./profile";
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

 
  profileDetails:FormGroup;
  image=[];
  constructor(private http:HttpClient) { 
    
  }
  
    setDetails(details:FormGroup,base64textString){
      // console.log(JSON.stringify(this.http.get('http://localhost:8080/find')));
       this.profileDetails=details;
     
      this.image=base64textString;
    }
    getDetails(){
      return this.profileDetails; 
    }
    getImage(){
      return this.image;
    }
  }
 

