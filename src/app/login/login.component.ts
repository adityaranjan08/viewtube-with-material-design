import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private account:AccountService,private route:Router) {


   }

  ngOnInit(): void {
  }

  loginUser(form:NgForm){
    console.log(form.value);
    this.account.isloggeIn();
    this.route.navigate(['studio/upload'])
  }

}
