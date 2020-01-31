import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { PreviewComponent } from "../preview/preview.component";
import { Validator } from "@angular/forms";
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
  
@Injectable({
  providedIn: 'root'
})
export class ProfileComponent implements OnInit{

  profileData=new FormGroup({
  firstName:new FormControl('bhushan',[Validators.required,Validators.minLength(3)]),
  middleName:new FormControl(''),
  lastName:new FormControl('',[Validators.required,Validators.minLength(3)]),
  email:new FormControl('',Validators.required),
  mobile:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
  degree:new FormControl(''),
  organisation:new FormControl(''),
  skill:new FormControl('',Validators.required),
  project:new FormControl('',Validators.required),
  experience:new FormControl(''),
  designation:new FormControl(''),
  achievement:new FormControl('',Validators.required),
  in :new FormControl(''),
  about:new FormControl('',Validators.required),
  location:new FormControl('')
  })
  base64textString=[];
  showResult:boolean=true;
  constructor( private profileService:ProfileService) {
    
   
    this.myObser=new Observable((observer)=>{
      observer.next(this.profileData);
    })
    
  }
  bks;
  myObser;
  myObser1;
update(){
  this.profileService.setDetails(this.profileData,this.base64textString);
}
get firstName(){
  return this.profileData.get('firstName');
}
get lastName(){
  return this.profileData.get('lastName');
}
get email(){
  return this.profileData.get('email');
}
get mobile(){
  return this.profileData.get('mobile');
}
get skill(){
  return this.profileData.get('skill');
}
get project(){
  return this.profileData.get('project');
}
get achievement(){
  return this.profileData.get('achievement');
}
get about(){
  return this.profileData .get('about');
}

  
  ngOnInit() {
 
  }
  show(){
    this.showResult=false;
    
  }
  file:any;
  readFile(evt) {
    var files = evt.target.files;
    var file = files[0];

  if (files && file) {
      var reader = new FileReader();

      reader.onload =this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
  }
}



_handleReaderLoaded(readerEvt) {
  this.base64textString.pop();
   var binaryString = readerEvt.target.result;
         this.base64textString.push('data:image/png;base64,' + btoa(readerEvt.target.result));
  }
}