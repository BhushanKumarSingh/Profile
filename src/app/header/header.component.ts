import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../profile.service";
import { Profile } from '../profile';
import { FormControl } from '@angular/forms';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private profileService:ProfileService,private profileComponent:ProfileComponent) { }

  ngOnInit() {
  }
  email=new FormControl('')
  search()
  {
    this.profileService.search(this.email.value);
  }
  set(){
    this.profileComponent.setResult();
  }
}
