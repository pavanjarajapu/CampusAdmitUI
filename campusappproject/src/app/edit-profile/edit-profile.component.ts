import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  student_Id!: number;
  user!: User;
  id!:number;
  form!: FormGroup;
  users: User[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.student_Id = this.route.snapshot.params['student_Id'];
        console.log(this.student_Id);
    this.userService.find(this.student_Id).subscribe((data: User)=>{
      console.log(data);
      this.user = data;
    });

    this.userService.getAll().subscribe((data: User[])=>{
      this.users = data;
      console.log(this.users);
    });

    this.form = new FormGroup({
      student_Id: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmpassword: new FormControl('', Validators.required),
      usertype: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.userService.update(this.student_Id, this.form.value).subscribe((res:any) => {
         console.log('User updated successfully!');
         this.router.navigateByUrl('/customerDashboard');
    })
  }

  deleteProfile(uid:number){
    this.userService.delete(uid).subscribe(res => {
         this.users = this.users.filter(item => item.student_Id !== uid);
         console.log('Profile deleted successfully!');
         alert('Profile deleted successfully!');
         localStorage.removeItem("User");
        location.href = "/login";
    })
}
}
