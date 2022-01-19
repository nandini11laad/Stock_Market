import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import {Register} from '../../environments/Register'
import {DataService} from'../data.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[DataService]
})
export class LoginComponent implements OnInit {
  rid:any
  loginForm: FormGroup;
  register:Register
  submitted: boolean = false
  constructor(private formBuilder: FormBuilder,private dataservice:DataService,private loginService: LoginService,private router: Router) { }

  ngOnInit() {
   
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    this.submitted = true;
    this.getRegisterData()
    if (this.loginForm.invalid) {
      return;
    }

  }
  goToViewTran(register:Register){
    this.dataservice.setRegister(register)
    console.log(this.dataservice.register);
    
    this.router.navigate(['/register'])
  }
  getRegisterData() {
    let flag=0
    console.log(this.loginService.url);
    return this.loginService.getAllRegister().subscribe(data => {
      console.log(data);
      data.forEach(element => {
        if (element.Username == this.loginForm.controls['username'].value && element.Password == this.loginForm.controls['password'].value) {
          this.register=element          
          flag=1
          this.goToViewTran(element)
        }
        
      });
      if(flag==0){
        console.log('Incorrect Credentials');
        
      }
    })

  }
}
