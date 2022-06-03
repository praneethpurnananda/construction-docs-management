import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'; 

import { BackendApiService } from '../../backend-api.service';


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
  usersList: any =[
    { displayName: 'Receptionist', value: 'receptionist' },
    { displayName: 'Employee', value: 'employee' },
    { displayName: 'Client', value: 'client' },
  ]
   



  constructor(private fb: FormBuilder, private router: Router, private backend:BackendApiService) {
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

  }

  regSubmitButton() {
    console.warn(this.RegistrationForm.value);
  
    this.router.navigate(['admin/user-management']);
  }

  passwordVisibility() {
    this.showPassword = !this.showPassword;
  }
  passwordVisibility2() {
    this.showPassword2 = !this.showPassword2;
  }

  userSelect() {
    this.selectedUser = this.RegistrationForm.value.usersList;
  }



}



