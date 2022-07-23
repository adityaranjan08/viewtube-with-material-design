import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  constructor(private route:Router,private service:AccountService) {
    
   }

  ngOnInit(): void {
  }

  registerUser(form:NgForm){
    console.log(form.value);
    this.service.checkBoxValue=form.value.checkBox
    this.route.navigate(['account/login'])

  }

 
 
}
