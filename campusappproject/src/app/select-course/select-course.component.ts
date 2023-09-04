import { Component, OnInit } from '@angular/core';
import { AdmissioninformationService } from '../admissioninformation.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Data } from '../data';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-select-course',
  templateUrl: './select-course.component.html',
  styleUrls: ['./select-course.component.css']
})
export class SelectCourseComponent {
  form!: FormGroup;
  data!: Data;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public dataService: DataService,
    public admissioninformationService: AdmissioninformationService,
    private router: Router
  ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      student_Id: new FormControl('', [Validators.required]),
      username: new FormControl('', Validators.required),
      course_Id: new FormControl('', Validators.required),
      course_Name: new FormControl('', Validators.required),
      course_fees: new FormControl('', Validators.required),
      
    });
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    this.dataService.find(this.form.value.course_Id).subscribe((data: Data)=>{
      console.log(data);
      this.data = data;
    });
    if(window.confirm("You have to pay Rs." + this.data.course_fees)){
      this.admissioninformationService.create(this.form.value).subscribe((res:any) => {
        alert("Your course has been successfully selected.");
        console.log('Selecting added successfully!');
        this.router.navigateByUrl('studentDashboard');
      })
     }else{
      alert("You have not made the payment.");
     }
    
  }
}
