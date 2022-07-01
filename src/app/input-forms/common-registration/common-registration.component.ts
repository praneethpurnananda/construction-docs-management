import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { BackendApiService} from '../../backend-api.service';
import { OtpComponet } from 'src/app/shared-module/popups/opt.component';

@Component({
  selector: 'app-common-registration',
  templateUrl: './common-registration.component.html',
  styleUrls: ['./common-registration.component.css', '../common-styles.css']
})

export class CommonRegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  displayOtp:boolean=false;

  constructor(private fb: FormBuilder, private router: Router,private backEndApi:BackendApiService, private matdialog:MatDialog) {
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
    console.warn(this.registrationForm.value);
    let backendRegister={
      "first_name":this.registrationForm.value.firstName, "last_name":this.registrationForm.value.lastName, "email": this.registrationForm.value.EmailAddress,
      "phone_number":this.registrationForm.value.phoneNumber, "password":this.registrationForm.value.password
    }
    this.backEndApi.registerUser(backendRegister).subscribe(
      (data: any) =>{
        console.log(data);
        console.log("=============================");
        if(data.status==true){
          console.log("---------------------");
          if(data.otpStatus==true){
          this.displayOtp=true;
          const dialogRef = this.matdialog.open(OtpComponet, {
            width : '500px',
            data : this.registrationForm.value.phoneNumber
          });
        }
        else{
          console.log("user successfully registered and there is an issue in otp generating");
        }
        }
        else{
          this.displayOtp=false;
          console.log("????????????????????????????????");
        }
      },
      (error :any) =>{
        console.error(error);
        this.displayOtp=false;
        console.log("''''''''''''''''''''''''''''''''''''''");
      }
    )
  }
}


