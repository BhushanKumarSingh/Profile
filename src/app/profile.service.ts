import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Profile} from "./profile";
import { ProfileComponent } from './profile/profile.component';



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

    profile=new Profile();
    
    save(profile:Profile){
       var url="http://localhost:8080/add"
    this.http.post(url,profile).subscribe(
      (result:any)=>{
        console.log(result);
      }
    ) 
    }
    profile1:any;
    rs=false;
    search(email:string){
      var url="http://localhost:8080/search?email="+email;
    this.http.get(url).subscribe(
      (result:any)=>{
        this.profile1=result;
      } 
    )
    }
  }
 

