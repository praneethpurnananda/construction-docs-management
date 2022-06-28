import { Component,Inject } from '@angular/core';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BackendApiService} from '../../backend-api.service';

@Component({
    selector: 'app-otp',
    templateUrl: './otp.component.html'
})

export class OtpComponet{
    otpform: FormGroup;
   
    constructor( private fb:FormBuilder, private backendapi:BackendApiService,
        private dialogRef:MatDialogRef<OtpComponet>,
        @Inject(MAT_DIALOG_DATA) public data:any
        ){
            this.otpform=this.fb.group({
                otpvalue:['',[Validators.required,Validators.pattern(/^[0-9]{1,10}$/)]]
            })
    }

    userOtp(){
        console.log(this.otpform.value.otpvalue);
        let backendotp={
            "otp":this.otpform.value.otpvalue,
            "phone_number":this.data
        }
        this.backendapi.Otp(backendotp).subscribe(
            (data:any) =>{
                console.log(data);
            },
            (error:any) => {
                console.error(error);
            }
        )
        
    }
}