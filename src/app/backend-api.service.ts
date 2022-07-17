import { Injectable } from '@angular/core';
import { HttpClient , HttpParams , HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonApiResponceUiComponent } from './shared-module/common-api-responce-ui/common-api-responce-ui.component';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private httpclient:HttpClient,private _snackBar:MatSnackBar) { }

  registerUser(registerform:any){
    return this.httpclient.post('http://localhost:3000/users/register', registerform,{
      observe:'body'
    })
  }

  loginUser(loginDetails: any){
    return this.httpclient.post('http://localhost:3000/users/login', loginDetails,{
      observe: 'body',
      headers: new HttpHeaders().append('x-access-token',  sessionStorage.getItem('token') || '')
    })
  }

  //otp
  Otp(otpform:any){
    return this.httpclient.post('http://localhost:3000/users/verifyotp', otpform,{
      observe: 'body'
    })
  }
  //internal methods
  snakBarMethod(message:any,status:boolean){
    let snackbarClassName = status ? 'success-snackbar' : 'error-snackbar';
    this._snackBar.openFromComponent(CommonApiResponceUiComponent ,{
    duration: 5 * 1000,
          panelClass:['notification-css', snackbarClassName],
          horizontalPosition:"end",
          verticalPosition:"top",
          data:{
            message: message,
            status: status
          }

    } );    
  }
}
