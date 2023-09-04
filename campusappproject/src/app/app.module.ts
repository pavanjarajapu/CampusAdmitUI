import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
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



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
   
    NavbarComponent,
   
    ProfileComponent,
        SignupComponent,
        AdminDashboardComponent,
        StudentDashboardComponent,
        ViewcoursesComponent,
        RegisterCourseComponent,
        ViewProfileComponent,
        EditProfileComponent,
        SelectCourseComponent,
        ViewSelectedcoursesComponent,
        AboutComponent,
        ContactComponent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
