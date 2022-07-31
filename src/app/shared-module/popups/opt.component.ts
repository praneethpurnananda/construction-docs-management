import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BackendApiService } from '../../backend-api.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-otp',
    templateUrl: './otp.component.html'
})

export class OtpComponet {
    otpform: FormGroup;
    timeLeft: number = 30;
    interval: any;

    constructor(private fb: FormBuilder, private backendapi: BackendApiService,
        private dialogRef: MatDialogRef<OtpComponet>,
        private router: Router,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.otpform = this.fb.group({
            otpvalue: ['', [Validators.required, Validators.pattern(/^[0-9]{1,10}$/)]]
        });

        this.startTimer();

    }

    startTimer() {
        //timer
        this.interval = setInterval(() => {
            console.log("going on....");
            if (this.timeLeft > 0) {
                this.timeLeft--;
            }
            else {
                clearInterval(this.interval);
            }
        }, 1000);
    }

    userOtp() {
        let backendotp = {
            "otp": this.otpform.value.otpvalue,
            "phone_number": this.data.phone_number
        }
        this.backendapi.Otp(backendotp).subscribe(
            (data: any) => {
                if (data.status === true) {
                    this.dialogRef.close();
                    this.router.navigate(['/login']);
                    this.backendapi.snakBarMethod(data["message"], data["status"]);
                    clearInterval(this.interval);
                }
                else {
                    this.backendapi.snakBarMethod(data["message"], data["status"]);
                }
            },
            (error: any) => {
                console.error(error);
                this.backendapi.snakBarMethod(error.error.message, false);
            }
        )

    }

    resendOtp() {
        this.timeLeft = 30;
        this.startTimer();
        let reqPayload = {
            "phone_number": this.data.phone_number
        };
        this.backendapi.resendOtp(reqPayload).subscribe(
            (data: any) => {
                this.backendapi.snakBarMethod(data["message"], data["status"]);
            },
            (error: any) => {
                console.error(error);
                this.backendapi.snakBarMethod(error.error.message, false);
            }
        )
    }

    closeForm() {
        clearInterval(this.interval);
        this.dialogRef.close({ event: 'cancel' })
    }
}