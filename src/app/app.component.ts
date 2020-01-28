import { Component, NgModule} from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@NgModule({
  imports:[ReactiveFormsModule],
})
export class AppComponent{
  title = 'Profile';

}
