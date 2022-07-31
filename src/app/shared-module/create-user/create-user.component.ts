import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'; 
import { MatDialog } from '@angular/material/dialog';

import { BackendApiService } from '../../backend-api.service';
import { OtpComponet } from 'src/app/shared-module/popups/opt.component';



@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  RegistrationForm: FormGroup;
  showPassword: boolean = false;
  showPassword2: boolean = false;
  selectedUser: string = '';
   usersList: any =[]

   

  constructor(private fb: FormBuilder, private router: Router, private backend:BackendApiService, private matdialog:MatDialog) {
    
    this.RegistrationForm = this.fb.group({
      usersList: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-z]).{1,}/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-z]).{2,}/)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10,10}$/)]],
      EmailAddress: ['', [Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)]],
      confirmPassword: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)]]
    })
  }

  

  ngOnInit(): void {
    this.getfunction();
    
  }

  regSubmitButton() {
    console.warn(this.RegistrationForm.value);

    let backendRegister={
      "first_name":this.RegistrationForm.value.firstName, "last_name":this.RegistrationForm.value.lastName, "email": this.RegistrationForm.value.EmailAddress,
      "phone_number":this.RegistrationForm.value.phoneNumber, "password":this.RegistrationForm.value.password,"role_id":this.RegistrationForm.value.usersList
    }
    this.backend.adduser(backendRegister).subscribe(
      (data:any) =>{
        console.log(data);
        if(data.status==true){
          if(data.otpStatus==true){
            const dialogRef = this.matdialog.open(OtpComponet, {
              width : '500px',
              data : this.RegistrationForm.value.phoneNumber
            });
            this.backend.snakBarMethod(data["message"],data["otpStatus"]);
          }
        }
      },
      (error:any) =>{
        console.error(error);
      }
      )
    
   // this.router.navigate(['admin/user-management']);
  }

  passwordVisibility() {
    this.showPassword = !this.showPassword;
  }
  passwordVisibility2() {
    this.showPassword2 = !this.showPassword2;
  }

  // userSelect() {
  //   this.selectedUser = this.RegistrationForm.value.usersList;
  // }

  getfunction(){
   this.backend.getuserlist().subscribe(
    (data:any) => {
      console.log(data);
      for(let key in data.roles){
        let dumobj = {
          'value': '',
          'viewValue': ''
        };
        dumobj["value"]=data.roles[key];
        dumobj["viewValue"]=key;
        this.usersList.push(dumobj)
      }
      console.log(this.usersList);
    },
    (error:any) => {
      console.error(error);
    }
   )
  }


}



