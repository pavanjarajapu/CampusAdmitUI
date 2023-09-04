import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Email:string='Email';
  PWD:string='pwd';
  

  constructor(private http: HttpClient) { }


  ngOnInit(): void {

  }
  Login(Email:string,PWD:string):any  {
   
   
    var param = {email:Email,pwd:PWD}; 
    //console.log(param);
    
    this.http.get<any>('http://localhost:48796/api/Studentlogins/'+Email+'/'+PWD).subscribe(data => {

    // var response = this.http.get<any>('http://localhost:48796/api/Studentlogins/pavanj%40gmail.com/Pavan%40123');
    
    // response.subscribe(data => {
       
    
     console.log(data);
     
      if(data.Status=='Error') { alert(data.Message);}
        else{
          localStorage.setItem("User",JSON.stringify(data));
          //console.log(data.userName=='Admin');return;
          if(data.usertype == 'admin')
       {
        window.location.href="/admin-dashboard";
       }
       else{
        window.location.href="/student-dashboard";
         
       }


          
          
          //window.location.href="/profile";
          
      }
        
        
      });
     return false;

    }

}
function go(arg0: string) {
  throw new Error('Function not implemented.');
}

