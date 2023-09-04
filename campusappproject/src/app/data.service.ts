import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:48796/api";
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  


  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER +'/courses');
  }


  getAll(): Observable<any> {
  
    return this.httpClient.get(this.REST_API_SERVER + '/courses/')
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete(this.REST_API_SERVER + '/courses/' + id, this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(data:Data): Observable<any> {
  
    return this.httpClient.post(this.REST_API_SERVER + '/courses/', JSON.stringify(data), this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
find(id:number):Observable<any>
{
  return this.httpClient.get(this.REST_API_SERVER+'/courses'+id)
  .pipe(
    catchError(this.errorHandler)
  )
}
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
  
}