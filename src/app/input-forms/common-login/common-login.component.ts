import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

import { BackendApiService} from '../../backend-api.service';
import { CommonApiResponceUiComponent } from 'src/app/shared-module/common-api-responce-ui/common-api-responce-ui.component';

@Component({
  selector: 'app-common-login',
  templateUrl: './common-login.component.html',
  styleUrls: ['./common-login.component.css', '../common-styles.css']
})
export class CommonLoginComponent implements OnInit {

  loginForm: FormGroup;
  showPassword: boolean = false;
  apiStatus:boolean = false;
 



  constructor(private fb: FormBuilder, private router: Router, private backendapi:BackendApiService,private _snackBar:MatSnackBar) {
    this.loginForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,10}$/)]],
      password: ['', [Validators.required ]]
      //Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)
    });
  }

  ngOnInit(): void {
    this.apiStatus=false;
    
  }

  userLogin() {
    this.apiStatus=true;
    let backendLogin={ 
      "phone_number":this.loginForm.value.phone, "password":this.loginForm.value.password
    }
    this.backendapi.loginUser(backendLogin).subscribe(
      (data:any) => {
        console.log(data);
        this.apiStatus=false;
        this._snackBar.openFromComponent(CommonApiResponceUiComponent ,{
          duration: 5 * 1000,
          panelClass:['notification-css'],
          horizontalPosition:"end",
          verticalPosition:"top"
        });
      },
      (error: any) => {
        console.error(error);
        this.apiStatus=false;
        this._snackBar.openFromComponent(CommonApiResponceUiComponent ,{
          duration: 115 * 1000,
          panelClass:['notification-css'],
          horizontalPosition:"end",
          verticalPosition:"top"
        });
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
