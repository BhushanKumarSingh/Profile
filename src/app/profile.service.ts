import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

 
  profileDetails:FormGroup;
  image=[];
  constructor() { 
    
  }
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
 

