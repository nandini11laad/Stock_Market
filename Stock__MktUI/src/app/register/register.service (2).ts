import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url='http://localhost:3000';

  

  constructor(private http:HttpClient) { }

  

  addCustomer(cust):Observable<any>{
    console.log("Reached service",cust);
    return this.http.post<any>(this.url+'/addCustomer',cust);
  }
}
