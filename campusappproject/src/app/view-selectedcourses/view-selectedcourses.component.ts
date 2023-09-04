import { Component, OnInit } from '@angular/core';
import { AdmissioninformationService } from '../admissioninformation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Admissioninformation } from '../admissioninformation';

@Component({
  selector: 'app-view-selectedcourses',
  templateUrl: './view-selectedcourses.component.html',
  styleUrls: ['./view-selectedcourses.component.css']
})
export class ViewSelectedcoursesComponent implements OnInit {
  selectedcourses: Admissioninformation[] = [];
  id!:number;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public admissioninformationService: AdmissioninformationService) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    var x = localStorage.getItem("User");
   if(x){
      this.id = JSON.parse(x).value.Student_Id;
      console.log(this.id);
      this.admissioninformationService.getAll().subscribe((data: Admissioninformation[])=>{
        this.selectedcourses = data;
        console.log(this.selectedcourses);
      })  
    }
  }

  deleteBooking(bid:number){
    this.admissioninformationService.delete(bid).subscribe(res => {
         this.selectedcourses = this.selectedcourses.filter(item => item.Admission_Id !== bid);
         console.log('Booking deleted successfully!');
         alert('Booking deleted successfully!');
          location.href = "/customerDashboard";
    })
}
}
