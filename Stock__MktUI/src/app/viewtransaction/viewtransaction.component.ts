import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import  {ViewtransactionService} from './viewtransaction.service'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {Location} from '@angular/common'
import {DataService} from '../data.service'
import { Register } from 'src/environments/Register';
import { Transaction } from 'src/environments/Transaction';
import {TransactionServiceEnv} from '../../environments/TransactionService'
declare const $:any
@Component({
  selector: 'app-viewtransaction',
  templateUrl: './viewtransaction.component.html',
  styleUrls: ['./viewtransaction.component.css']
})

export class ViewtransactionComponent implements OnInit {
  @ViewChild('editmodal',null) editmodal:ElementRef
  @ViewChild('deletemodal',null) deletemodal:ElementRef
 
  sector:any=[]
  company:any=[]
  editForm:FormGroup
  netAmt:any=0
  tid:any=0
  rid:any=0
  txt:any=''
  register:Register
  transaction:Transaction[]=[]
  currentComp:any=''
  submitted:boolean=false
  displayTranList:Transaction[]=[]
  sectors=['Financials','Automobile','Ecommerce','Textile','Chemicals']
  companies={Financials:['Credit Suisse','Goldman Sachs'],Automobile:['Tata Motors','Mahindra'],Ecommerce:['Walmart','Flipkart'],Textile:['Bombay Dyeing','Aigle'],Chemicals:['Mitsubishi','DuPont']}
  companys:any
  constructor(private ts:TransactionServiceEnv,private location:Location,private dataservice:DataService,private viewService:ViewtransactionService,private formBuilder:FormBuilder,private router:Router) { 
    
    
  }

  ngOnInit() {
    console.log('Hi');
    console.log(this.dataservice.register)
    
     this.viewTran()
    
    
    this.editForm=this.formBuilder.group({
      'sector':['',[Validators.required]],
      'company':['',[Validators.required]],
      'rate':['',[Validators.required]],
      'nshares':['',[Validators.required]],
      
    })
  }

//  ngOnDestroy(){
//    this.dataservice.setRegister(null)
//  }
  dropChange(val){
    this.companys=this.companies[val]
    
  }
  //To close the modal on clicking the back button of the browser
  editClose(tid){
    this.tid=tid
    console.log("......>>",this.transaction);
    
    this.transaction.forEach(element=>{
      if(element.TID==tid){
        this.dropChange(element.Sector[0]['Sname'])
        this.editForm=this.formBuilder.group({
          'Sector':[element.Sector[0]["Sname"],[Validators.required]],
          'Company':[element.Company[0]["Cname"],[Validators.required]],
          'Rate':[element.Rate,[Validators.required]],
          'Nshares':[element.Nshares,[Validators.required]],
          // 'SID':[element.SID,[]]
          
        })
        this.editForm.value['SID']=element['SID']
        this.editForm.value['CID']=element['CID']
      }
      
    })
    
    this.location.subscribe(()=>{
      $(this.editmodal.nativeElement).modal('hide')
    })
  }
  edit(){
    this.netAmt=(document.getElementById("namt") as HTMLInputElement).value
    this.editForm.value['NetAmt']=this.netAmt
    this.editForm.value['TID']=this.tid
   
    
    return this.viewService.updateTransaction(this.editForm.value).subscribe(
      success=>{
        
          console.log("Updated succesfully");
          this.ts.updateTransaction(this.editForm.value)
          this.search()
          
        },
        fail=>{
          console.log("An error occured please try again",fail);
          
        }

    )
  }
  delete(){
   return this.viewService.deleteTransaction({TID:this.tid}).subscribe(
     success=>{
      console.log('Deleted Successfully');
      this.ts.deleteTransaction(success)
      this.search()
     },
     fail=>{
      console.log("Error occured in Delete",fail);
      
   })
  }
  
   //To close the modal on clicking the back button of the browser
   deleteClose(tid){
    this.tid=tid
    this.location.subscribe(()=>{
      $(this.deletemodal.nativeElement).modal('hide')
    })
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.editForm.invalid) {
        return;
    }

   
}
  viewTran(){
    
    this.ts.TransactionList.subscribe((data:Transaction[])=>{
      this.transaction=data
      this.displayTranList=this.transaction
      console.log(this.transaction);
      
      // this.search()
    })
    
    
    
  }

  

  search(){
    
    this.transaction=this.displayTranList
   
    if(this.txt){
      this.txt=this.txt.toLowerCase()
      this.transaction=this.transaction.filter((element)=>{
        for(var el in element){
          if(element[el]){
            if(element[el].toString().toLowerCase().indexOf(this.txt)!=-1){
              return true
            }
          }
          
        }
      })
    }
    
    else{
      this.transaction=this.displayTranList
    }
  }
}
