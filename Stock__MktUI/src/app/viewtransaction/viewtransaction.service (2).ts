import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Transaction } from '../../environments/Transaction';

@Injectable({
  providedIn: 'root'
})
export class ViewtransactionService {
  url="http://localhost:3000"
  constructor(private http:HttpClient) { }

  transaction= new BehaviorSubject<any>([])
  sectorList=new BehaviorSubject([])
  companyList=new BehaviorSubject([])

  getAllTransaction():Observable<any>{
    return this.http.get<any>(this.url+'/getAllTransaction')
  }

  getAllSector():Observable<any>{
    return this.http.get<any>(this.url+'/getAllSector')
  }

  getAllCompany():Observable<any>{
    return this.http.get<any>(this.url+'/getAllCompany')
  }

  addTransaction(tran):Observable<any>{
    console.log("Add",tran);
    this.transaction=this.transaction.getValue()
     return this.http.post<any>(this.url+'/addTransaction',tran)
    }
  updateTransaction(tran):Observable<any>{
    return this.http.put<any>(this.url+'/updateTransaction',tran)
  }

  deleteTransaction(tid):Observable<any>{
    console.log(tid);
    
    return this.http.post(this.url+'/deleteTransaction',tid)
  }
}
