import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PreviewComponent } from './preview/preview.component';


const routes: Routes = [
  {path:'',component:ProfileComponent},
  {path:'profile',component:ProfileComponent},
  {path:'preview',component:PreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent=[ProfileComponent,PreviewComponent];
