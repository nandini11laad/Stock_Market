import { Injectable } from '@angular/core';
import { Register } from '../environments/Register';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  register:any=undefined
  constructor() { }

  setRegister(register:any){
    this.register=register;
  }

  getRegister():any{
    return this.register
  }
}
