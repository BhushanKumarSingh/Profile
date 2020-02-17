import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Profile } from "../profile";
import { HttpClient, HttpParams } from '@angular/common/http';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})

@Injectable({
  providedIn: 'root'
})
export class ProfileComponent implements OnInit {

  profileData = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    middleName: new FormControl(''),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', Validators.required),
    mobile: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
    degree: new FormControl(''),
    organisation: new FormControl(''),
    skill: new FormControl('', Validators.required),
    project: new FormControl('', Validators.required),
    experience: new FormControl(''),
    designation: new FormControl(''),
    achievement: new FormControl('', Validators.required),
    in: new FormControl(''),
    about: new FormControl('', Validators.required),
    location: new FormControl('')
  })
  base64textString = [];
  showResult: boolean = true;
  constructor(private profileService: ProfileService, private http: HttpClient) {


    this.myObser = new Observable((observer) => {
      observer.next(this.profileData);
    })
    
  }
  bks;
  myObser;
  myObser1;
  update() {
    this.profileService.setDetails(this.profileData, this.base64textString);
  }
  get firstName() {
    return this.profileData.get('firstName');
  }
  get lastName() {
    return this.profileData.get('lastName');
  }
  get email() {
    return this.profileData.get('email');
  }
  get mobile() {
    return this.profileData.get('mobile');
  }
  get skill() {
    return this.profileData.get('skill');
  }
  get project() {
    return this.profileData.get('project');
  }
  get achievement() {
    return this.profileData.get('achievement');
  }
  get about() {
    return this.profileData.get('about');
  }
  get in(){
    return this.profileData.get('in');
  }
  get location(){
    return this.profileData.get('location');
  }
  get experience(){
    return this.profileData.get('experience');
  }
  get degree(){
    return this.profileData.get('degree');
  }
  get organisation(){
    return this.profileData.get('organisation');
  }
  get designation(){
    return this.profileData.get('designation');
  }




  ngOnInit() {
   
   console.log('bhushan')
    
  }
  setResult(){
    console.log(this.profileService.profile1)
    this.firstName.patchValue(this.profileService.profile1.firstName);
    this.lastName.patchValue(this.profileService.profile1.lastName);
    this.email.patchValue(this.profileService.profile1.email);
    this.project.patchValue(this.profileService.profile1.projectDetails.description);
    this.about.patchValue(this.profileService.profile1.othersDetail.about);
    this.in.patchValue(this.profileService.profile1.linkedin)
    this.achievement.patchValue(this.profileService.profile1.othersDetail.achievement);
   
    this.mobile.patchValue(this.profileService.profile1.mobileNo);
    var skill1=this.profileService.profile1.skills.programing+this.profileService.profile1.skills.webTech+this.profileService.profile1.skills.dbs;
    this.skill.patchValue(skill1)
    this.organisation.patchValue(this.profileService.profile1.othersDetail.organisation);
    this.designation.patchValue(this.profileService.profile1.othersDetail.designation);
    this.experience.patchValue(this.profileService.profile1.othersDetail.experience);

    this.location.patchValue(this.profileService.profile1.location);
    this.degree.patchValue(this.profileService.profile1.education.education)

  }
  show() {
    this.showResult = false;

  }
  profile = new Profile();

  url;
  body;
  data;
  programingLanguage:string="";
  webTechnology:string="";
  database:string="";
  technology:Array<string>=[];
  skill1;
  saveResult() {
    this.profile.setFirstName=this.profileData.get('firstName').value;
    this.profile.setLastName=this.profileData.get('lastName').value;
    this.profile.setEmail=this.profileData.get('email').value;
    this.profile.mobileNo=this.profileData.get('mobile').value;
    this.profile.setLocation=this.profileData.get('location').value;
    this.profile.setLinkedin=this.profileData.get('in').value;
    this.profile.description=this.profileData.get('project').value;
    this.profile.setEducation=this.profileData.get('degree').value;
    this.skill1=this.profileData.get('skill').value;
    this.profile.setAbout=this.profileData.get('about').value;
    this.profile.setAchievement=this.profileData.get('achievement').value;
    this.profile.setDesignation=this.profileData.get('designation').value;
    this.profile.setOrganisation=this.profileData.get('organisation').value;
    this.profile.setExperience=this.profileData.get('experience').value;



    this.skill1=this.skill1.toUpperCase();
      
    if(this.skill1.length>0)
    this.technology=this.skill1.split(",");

    for(let i=0;i<this.technology.length;i++){
      if(this.technology[i]=="C"||this.technology[i]=="C++"||this.technology[i]=="JAVA"||this.technology[i]=="PHP"||this.technology[i]=="PYTHON")
      this.programingLanguage+=this.technology[i] +",";
      else if(this.technology[i]=="MYSQL"||this.technology[i]=="ORACLE"||this.technology[i]=="MONGODB")
      this.database+=this.technology[i]+",";
      else
      this.webTechnology+=this.technology[i]+",";
    }
   this.profile.setPrograming=this.programingLanguage;
   this.profile.setWebTech=this.webTechnology;
   this.profile.setDbs=this.database;


    this.profileService.save(this.profile);

    alert("Your Record is Submitted");
  }


  file: any;
  url_;
  readFile(evt) {
    var files = evt.target.files;
    var file = files[0];
    const formdata: FormData = new FormData();

    formdata.append('file', file);
    var url = "http://localhost:8080/fileUploade"
    console.log(formdata);
    this.http.post(url, formdata, { responseType: 'text' }).subscribe(
      (result: any) => {
        console.log(result);
      }
    )

    if (files && file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }



  _handleReaderLoaded(readerEvt) {
    this.base64textString.pop();
    var binaryString = readerEvt.target.result;
    this.base64textString.push('data:image/png;base64,' + btoa(readerEvt.target.result));
  }

  setValue(result:any){
    this.firstName.patchValue=result.firstName;
    this.lastName.patchValue=result.lastName;
    this.mobile.patchValue=result.mobile;
  }

}