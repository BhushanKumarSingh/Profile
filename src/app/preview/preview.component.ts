import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from "../profile/profile.component";
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { NgIf } from '@angular/common';
import { RoutingComponent } from "../app-routing.module";
import { ProfileService } from '../profile.service';
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  skill:string;
  firstName:string;
  middleName:String;
  lastName:string;
  email:string;
  mobile:string;
  degree:string;
  organisation:string;
  designation:string;
  experience:string;
  project:string;
  in:string;
  about:string;
  achievement:string;
  location:string;
  image1:any;
  profileDetails:FormGroup;
  bname:string;
  constructor(private profileService:ProfileService) {
    
   // this.profileService.myMethod$.subscribe((data)=>{
     // console.log(data.value);
    ///})
    //console.log(this.profileComponent.profileData.value);
    /*this.profileComponent.myObser.subscribe((x:any)=>{
      console.log(x.value)
      this.updateValues(x);
    })*/
   /* this.profileService.myMethod$.subscribe((data)=>{
      console.log(data.value);
      this.bks=data.value;
      this.updateValues(data);
      console.log(this.firstName+' bsk')
    })
    */
   this.profileDetails=this.profileService.getDetails();
   this.updateValues(this.profileDetails);
   this.image1=this.profileService.getImage();
   }
   //result:boolean=false;
   bks:string;
  ngOnInit() {
   /* this.profileComponent.myObser1.subscribe((x:any)=>{
      console.log(x.value)
      this.updateValues(x);
    })*/
  // this.profileComponent.myObser.subscribe((x:any)=>{
    // this.updateValues(x);
     
  //});
  /*this.profileComponent.myObser1.subscribe((img:any)=>{
    this.image1=img;
  })*/
 
  }
  programingLanguage:Array<string>=[];
  webTechnology:Array<string>=[];
  database:Array<string>=[];
   t:number=0;
  j:number=0;
  k:number=0;
  name:string="";
  technology:Array<string>=[];
  updateValues(x:FormGroup){
    //console.log(x.get('firstName').value);
    //console.log(x.get('firstNmae').value);
      this.firstName=x.get('firstName').value;
      this.middleName=x.get('middleName').value;
      this.lastName=x.get('lastName').value;
      this.email=x.get('email').value;
      this.mobile=x.get('mobile').value;
      this.degree=x.get('degree').value;
      this.skill=x.get('skill').value;
      this.organisation=x.get('organisation').value;
      this.designation=x.get('designation').value;
      this.experience=x.get('experience').value;
      this.project=x.get('project').value;
      this.in=x.get('in').value;
      this.about=x.get('about').value;
      this.achievement=x.get('achievement').value;
      this.location=x.get('location').value;
      this.skill=this.skill.toUpperCase();
      
      if(this.skill.length>0)
      this.technology=this.skill.split(",");

      for(let i=0;i<this.technology.length;i++){
        if(this.technology[i]=="C"||this.technology[i]=="C++"||this.technology[i]=="JAVA"||this.technology[i]=="PHP"||this.technology[i]=="PYTHON")
        this.programingLanguage[this.t++]=this.technology[i];
        else if(this.technology[i]=="MYSQL"||this.technology[i]=="ORACLE"||this.technology[i]=="MONGODB")
        this.database[this.j++]=this.technology[i];
        else
        this.webTechnology[this.k++]=this.technology[i];
      }
      if(this.experience=="0")
      this.experience="I am fresher";
      else
      this.experience="I have experience of "+this.experience+" year"

      this.name=this.firstName+" "+this.middleName+" "+this.lastName;

      this.designation=this.designation+" At   "+this.organisation
      
  }

}
