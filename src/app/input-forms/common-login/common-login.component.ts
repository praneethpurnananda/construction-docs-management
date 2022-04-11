import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-login',
  templateUrl: './common-login.component.html',
  styleUrls: ['./common-login.component.css', '../common-styles.css']
})
export class CommonLoginComponent implements OnInit {

  loginForm: FormGroup;
  showPassword: boolean = false;


  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,10}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)]]
    });
  }

  ngOnInit(): void {
  }

  userLogin() {
    console.warn(this.loginForm.value)
  }

  passwordVisibility() {
    this.showPassword = !this.showPassword;
  }

  routerNavigate(url: string) {
    this.router.navigate([`/${url}`])
  }

}
