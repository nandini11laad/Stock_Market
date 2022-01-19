import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url='http://localhost:3000';


  constructor(private http:HttpClient) { }
  
  getAllRegister():Observable<any>{
    return this.http.get<any>(this.url+'/getAllRegister'); 
  }
}
