import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  accountLoggedIn:boolean=false;

  checkBoxValue:boolean=false;
  constructor() { }


  isloggeIn(){
    this.accountLoggedIn=true;
  }
  




}
