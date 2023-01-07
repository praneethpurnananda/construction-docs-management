import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder} from '@angular/forms';
import { passwordValidation } from 'src/app/common-files/passwordValidation';


@Component({
  selector: 'app-common-new-password',
  templateUrl: './common-new-password.component.html',
  styleUrls: ['./common-new-password.component.css','../common-styles.css']
})
export class CommonNewPasswordComponent implements OnInit {

  newPasswordForm: FormGroup;
  showPassword:boolean=false;
  showPassword2:boolean=false;
  constructor(private fb:FormBuilder) {
    this.newPasswordForm=this.fb.group({
      newPassword:['',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)]],
      confirmNewPassword:['',[Validators.required,passwordValidation]]
    })
  }
   

  ngOnInit(): void {
  }

  passwordVisibility() {
    this.showPassword = !this.showPassword;
  }

  passwordVisibility2() {
    this.showPassword2 = !this.showPassword2;
  }

  newPasswordvalues(){
    console.warn(this.newPasswordForm.value)
  }
}
