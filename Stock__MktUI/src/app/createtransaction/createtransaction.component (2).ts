import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {CreatetransactionService} from './createtransaction.service'
@Component({
  selector: 'app-createtransaction',
  templateUrl: './createtransaction.component.html',
  styleUrls: ['./createtransaction.component.css']
})
export class CreatetransactionComponent implements OnInit {
  createForm:FormGroup
  submitted:boolean=false
  sectors=['Financials','Automobile','Ecommerce','Textile','Chemicals']
  companies={Financials:['Credit Suisse','Goldman Sachs'],Automobile:['Tata Motors','Mahindra'],Ecommerce:['Walmart','Flipkart'],Textile:['Bombay Dyeing','Aigle'],Chemicals:['Mitsubishi','DuPont']}
  companys:any
  netAmt:any=0
  constructor(private formBuilder:FormBuilder,private router:Router, private createservice:CreatetransactionService) { }

  ngOnInit() {
    this.createForm=this.formBuilder.group({
      'sector':['',[Validators.required]],
      'company':['',[Validators.required]],
      'rate':['',[Validators.required]],
      'nshares':['',[Validators.required]],
      // 'namt':['',[Validators.required]]
    })
    
  }

  

  dropChange(val){
    this.companys=this.companies[val]
  }
  add(){
    this.netAmt=(document.getElementById('namt') as HTMLInputElement).value
    console.log(this.netAmt);
    
    this.createForm.value['namt']=this.netAmt
    console.log(this.createForm.value);
    
    // return this.createservice.addTransaction(this.createForm.value).subscribe(success=>{
    //   if(success){
    //     console.log("Added succesfully");
        
    //   }
    //   else{
    //     console.log("An error occured please try again");
        
    //   }
    // })
  }
  onSubmit() {
    this.submitted = true;
    this.add()
    // stop here if form is invalid
    if (this.createForm.invalid) {
        return;
    }

   
}

}
