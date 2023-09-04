import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { ViewcoursesComponent } from './viewcourses/viewcourses.component';
import { RegisterCourseComponent } from './register-course/register-course.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SelectCourseComponent } from './select-course/select-course.component';
import { ViewSelectedcoursesComponent } from './view-selectedcourses/view-selectedcourses.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';






const routes: Routes = [

  {path:"",component:IndexComponent},
  {path:"login",component:LoginComponent},
  {path:"profile",component:ProfileComponent},
  {path:"signup",component:SignupComponent},
  {path:"admin-dashboard",component:AdminDashboardComponent},
  {path:"student-dashboard",component:StudentDashboardComponent},
  {path:"viewcourses",component:ViewcoursesComponent},
  {path:"register-course",component:RegisterCourseComponent},
  {path:"view-profile/:student_Id",component:ViewProfileComponent},
  {path:"edit-profile/:student_Id",component:EditProfileComponent},
  {path:"select_course",component:SelectCourseComponent},
  {path:"view-selectedcourses",component:ViewSelectedcoursesComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent}


  
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
