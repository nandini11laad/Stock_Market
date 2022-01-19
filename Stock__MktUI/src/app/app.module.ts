import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreatetransactionComponent } from './createtransaction/createtransaction.component';
import { ViewtransactionComponent } from './viewtransaction/viewtransaction.component';
import {FormBuilder,ReactiveFormsModule,FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {LoginService} from '../app/login/login.service'
import {RegisterService} from './register/register.service'
import {DataService} from './data.service'
import {ViewtransactionService} from './viewtransaction/viewtransaction.service'
import {CreatetransactionService} from './createtransaction/createtransaction.service'
import {TransactionServiceEnv} from '../environments/TransactionService'
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    CreatetransactionComponent,
    ViewtransactionComponent
  ],
  providers: [LoginService,RegisterService,ViewtransactionService,TransactionServiceEnv,CreatetransactionService,DataService],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
    ])
  ],
  
  bootstrap: [AppComponent]
})


export class AppModule { }


