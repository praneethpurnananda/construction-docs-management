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
  isLoading: boolean = false;
  verfyOtpMessage: boolean = false;


  constructor(private fb: FormBuilder, private router: Router, private backendapi: BackendApiService, private matdialog: MatDialog) {
    this.loginForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,10}$/)]],
      password: ['', [Validators.required]]
      //Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)
    });
  }

  ngOnInit(): void {
    this.isLoading = false;
    this.verfyOtpMessage = false;
  }

  userLogin() {
    this.isLoading = true;
    let backendLogin = {
      "phone_number": this.loginForm.value.phone, "password": this.loginForm.value.password
    }
    this.backendapi.loginUser(backendLogin).subscribe(
      (data: any) => {
        if (data.status === true) {
          if (data.otpStatus === true) {
            if ('token' in data) {
              sessionStorage.setItem('token', data['token']);
            }
            this.backendapi.snakBarMethod(data["message"], data["status"]);
            this.backendapi.snakBarMethod('Login Failed! Please contact admin team', false);
          }
          else {
            this.backendapi.snakBarMethod(data["message"], data["status"]);
            this.verfyOtpMessage = true;
          }
        }
        else {
          this.backendapi.snakBarMethod(data["message"], data["status"]);
        }
        this.isLoading = false;
      },
      (error: any) => {
        console.error(error);
        this.backendapi.snakBarMethod(error.error.message, false);
        this.isLoading = false;

        if ('status' in error.error && 'otpStatus' in error.error && error.error.otpStatus == false && error.error.status == true) {
          this.verfyOtpMessage = true;
        }

      }
    )
  }

  otpVerifyBox() {
    this.isLoading = true;
    let userDetails = {
      phone_number: this.loginForm.value.phone
    };
    this.backendapi.resendOtp(userDetails).subscribe(
      (data: any) => {
        if ('status' in data && data.status === true) {
          this.backendapi.snakBarMethod(data["message"], data["status"]);
          const dialogRef = this.matdialog.open(OtpComponet, {
            width: '500px',
            data: { "phone_number": this.loginForm.value.phone },
            disableClose: true
          });
          dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            if (result && result.event != undefined && result.event != null && result.event === 'cancel')
              this.verfyOtpMessage = true;
            else
              this.verfyOtpMessage = false;
          });
        }
        else {
          this.backendapi.snakBarMethod(data["message"], data["status"]);
        }
        this.isLoading = false;
      },
      (error: any) => {
        console.error(error);
        this.backendapi.snakBarMethod(error.error.message, false);
        this.isLoading = false;
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
