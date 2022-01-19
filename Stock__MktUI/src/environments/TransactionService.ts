import {ViewtransactionService} from '../app/viewtransaction/viewtransaction.service'

import { Observable,BehaviorSubject } from 'rxjs';
import { Transaction } from './Transaction';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class TransactionServiceEnv{
    constructor( private viewtranservice:ViewtransactionService,private http:HttpClient){}

    url='http://localhost:3000'
    private _transactionList=new BehaviorSubject<Transaction[]>([])
    TransactionList:Observable<Transaction[]>=this._transactionList.asObservable()

    async errHandler(err){
        console.log(err)
    }
    getAllTransaction():void{
        try{
             this.http.get<any>(this.url+'/getAllTransaction').subscribe(data=>{
                this._transactionList.next(JSON.parse(JSON.stringify(data)))
            },this.errHandler)}
        
        catch(err){
            this.errHandler(err)
        }
        
    }

    addTransaction(transaction:Transaction){
        try{
            this._transactionList.getValue().push(transaction)
        }
        catch(err){
            this.errHandler(err)
        }
        
    }

    updateTransaction(transaction:Transaction){
        try{
            console.log(transaction);
            
            let transactionList=this._transactionList.getValue()
            console.log(transactionList);
            
            transactionList.forEach((data,index)=>{
                if(transaction.TID==data.TID){
                    transactionList[index]=transaction
                }
            })
            console.log("Final Update",transactionList);
            
        }
        catch(err){
            this.errHandler(err)
        }
       
    }

    deleteTransaction(transaction:Transaction){
        try{
            let transactionList=this._transactionList.getValue()
        this._transactionList.next(transactionList.filter(element=>{
            transaction.TID!=element.TID
        }))
        }
        catch(err){
            this.errHandler(err)
        }
        
    }

}