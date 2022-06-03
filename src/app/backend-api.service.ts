import { Injectable } from '@angular/core';
import { HttpClient , HttpParams , HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private httpclient:HttpClient) { }

  registerUser(registerform:any){
    return this.httpclient.post('http://localhost:3000/users/register', registerform,{
      observe:'body'
    })
  }

  loginUser(loginDetails: any){
    return this.httpclient.post('http://localhost:3000/users/login', loginDetails,{
      observe: 'body'
    })
  }
}
