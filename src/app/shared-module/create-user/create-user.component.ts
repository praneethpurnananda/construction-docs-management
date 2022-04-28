import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  RegistrationForm: FormGroup;

  usersList:any=[
    {displayName: 'Receptionist', value: 'receptionist'},
    {displayName: 'Employee', value: 'employee'},
    {displayName: 'Client', value: 'client'},
  ]



  constructor(private fb:FormBuilder, private router: Router) {
    this.RegistrationForm=this.fb.group({
      usersList:['',Validators.required],
      firstName:['',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-z]).{1,}/)]],
      lastName: ['',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-z]).{2,}/)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10,10}$/)]],
      EmailAddress: ['',[Validators.email]],
      password:['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)]],
      confirmPassword:['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)]]
    })
   }

  ngOnInit(): void {
  }


}



