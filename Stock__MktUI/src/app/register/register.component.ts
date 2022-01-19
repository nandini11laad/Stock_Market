import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router } from '@angular/router'
import {HttpClient} from '@angular/common/http';
import {RegisterService} from './register.service'
import {DataService} from '../data.service'
import { Register } from 'src/environments/Register';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  submitted:boolean=false
  cust:any
  constructor(private formBuilder:FormBuilder,private data:DataService, private router:Router,private registerservice:RegisterService) { }

  ngOnInit() {
    this.cust=this.data.getRegister()
    console.log(this.cust);
    
    this.register();
  }
  register(){
    this.registerForm=this.formBuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      username:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(6)]],
      cpassword:['',[Validators.required,Validators.minLength(6)]],
      cid:['',Validators.required]
    })
  }
  viewTran(){
    this.router.navigateByUrl('/view')
  }
  onSubmit(){
    this.submitted=true;
    
    this.addCustomer()
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      
        return;
    }
    
    
    
  }
  addCustomer(){
    return this.registerservice.addCustomer(this.registerForm.value).subscribe(success=>{
      if(success){
        console.log(success);
        this.viewTran()
      }
      else{
        console.log('An error occurred, please try again');
        
      }
    })
  }
 
}
