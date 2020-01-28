import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

 // myMethod$:Observable<any>;
  //private sub=new Subject<any>();
  profileDetails:FormGroup;
  image=[];
  constructor() { 
    //this.myMethod$=this.sub.asObservable();
    //this.profileCom penent.myObser.su
  }
  //myMethod(profileData){
    //console.log(profileData.value);
    //this.sub.next(profileData);
    setDetails(details:FormGroup,base64textString){
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
 

