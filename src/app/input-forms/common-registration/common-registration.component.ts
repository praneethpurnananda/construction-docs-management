import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-common-registration',
  templateUrl: './common-registration.component.html',
  styleUrls: ['./common-registration.component.css', '../common-styles.css']
})

export class CommonRegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registrationForm = this.fb.group({
      firstName:['',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-z]).{1,}/)]],
      lastName: ['',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-z]).{2,}/)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10,10}$/)]],
      EmailAddress: ['',[Validators.email]],
      password:['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)]],
      confirmPassword:['', [Validators.required]],
    })
   }

  ngOnInit(): void {};

  routerNavigate(url: string) {
    this.router.navigate([`/${url}`])
  }
  
  
  registrationUser(){
    console.warn(this.registrationForm.value)
  }
}



