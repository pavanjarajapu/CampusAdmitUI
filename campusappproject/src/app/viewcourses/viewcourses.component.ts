import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Data} from '../data';



@Component({
  selector: 'app-viewcourses',
  templateUrl: './viewcourses.component.html',
  styleUrls: ['./viewcourses.component.css']
})
export class ViewcoursesComponent implements OnInit  {

 // courses:any;
 // message:String = '';
 IsAdmin:boolean=false;
  id!:number;
  courses:Data[]=[];


  constructor(private dataService: DataService) { }

  ngOnInit():void {

   // this.dataService.sendGetRequest().subscribe((data: any)=>{
      
      //this.courses = data;
      //console.log(this.courses);
     // this.message = "updated";
   // }) 
   var x = localStorage.getItem("User");
   if(x){
    this.IsAdmin=JSON.parse(x).usertype=='admin';
      this.id = JSON.parse(x).student_Id;
      console.log(this.id);
      this.dataService.getAll().subscribe((data:Data[])=>{
        this.courses = data;
        console.log(this.courses);
      })  
    }
    
  }

  deleteCourse(id:number){
    this.dataService.delete(id).subscribe(res => {
         this.courses = this.courses.filter(item=> item.course_Id!== id);
         console.log('Course deleted successfully!');
         alert('Course deleted successfully!');
    })


}

}
