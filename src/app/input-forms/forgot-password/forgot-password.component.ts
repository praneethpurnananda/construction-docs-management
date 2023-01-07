import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, Form } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css', '../common-styles.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordFormPhone:FormGroup;
  forgotPasswordFormOTP:FormGroup

  constructor(private router:Router,private fb: FormBuilder) { 
    this.forgotPasswordFormPhone=this.fb.group({
      phone:['',[Validators.required, Validators.pattern(/^[0-9]{10,10}$/)]]
    });
    this.forgotPasswordFormOTP=this.fb.group({
      otp:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  navigateUrl(Url:string){
    this.router.navigate([`/${Url}`])
  }

 

}
