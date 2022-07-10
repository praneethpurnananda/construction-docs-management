import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


import { BackendApiService } from '../../backend-api.service';
import { OtpComponet } from 'src/app/shared-module/popups/opt.component';


@Component({
  selector: 'app-common-login',
  templateUrl: './common-login.component.html',
  styleUrls: ['./common-login.component.css', '../common-styles.css']
})
export class CommonLoginComponent implements OnInit {

  loginForm: FormGroup;
  showPassword: boolean = false;
  apiStatus: boolean = false;
  messageFromApi: any;
  verfyOtpMessage: boolean = false;
  displayOtp: boolean = false;


  constructor(private fb: FormBuilder, private router: Router, private backendapi: BackendApiService, private matdialog: MatDialog) {
    this.loginForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,10}$/)]],
      password: ['', [Validators.required]]
      //Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)
    });
  }

  ngOnInit(): void {
    this.apiStatus = false;
  }

  userLogin() {
    this.apiStatus = true;
    let backendLogin = {
      "phone_number": this.loginForm.value.phone, "password": this.loginForm.value.password
    }
    this.backendapi.loginUser(backendLogin).subscribe(
      (data: any) => {
        console.log(data);
        this.apiStatus = false;
        if (data.status === true) {
          if (data.otpStatus === true) {
            console.log(data['token']);
            this.backendapi.snakBarMethod(data["message"], data["status"]);
          }
          else {
            this.backendapi.snakBarMethod(data["message"], data["status"]);
            this.verfyOtpMessage = true;
            this.displayOtp = true;
            const dialogRef = this.matdialog.open(OtpComponet, {
              width: '500px',
              data: this.loginForm.value.phoneNumber
            });
          }
        }
        else {
          this.backendapi.snakBarMethod(data["message"], data["status"]);
        }
      },
      (error: any) => {
        console.error(error);
        this.apiStatus = false;
        this.backendapi.snakBarMethod(error.error.message, false);
      }
    )
  }

  passwordVisibility() {
    this.showPassword = !this.showPassword;
  }

  routerNavigate(url: string) {
    this.router.navigate([`/${url}`])
  }

}
