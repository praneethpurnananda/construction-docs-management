import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BackendApiService } from '../../backend-api.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-editUserPopup',
    templateUrl: './editUserPopup.html'
})

export class editUserPopupComponent {
    editpopupForm:FormGroup;
    usersList: any =[];
    selectedUser: string = '';
    constructor(private fb: FormBuilder, private backendapi: BackendApiService,
        private dialogRef: MatDialogRef<editUserPopupComponent>,
        private router: Router,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.editpopupForm= this.fb.group({
            usersList: [this.data.role_id? this.data.role_id:'', Validators.required],
            firstName: [this.data.first_name? this.data.first_name:'', [Validators.required]],
            lastName: [this.data.last_name? this.data.last_name:'', [Validators.required]],
             phoneNumber: [this.data.phone_number ? this.data.phone_number:'', [Validators.required, Validators.pattern(/^[0-9]{10,10}$/)]],
             EmailAddress: [this.data.email? this.data.email:'', [Validators.email]],
             password:[this.data.password]
        })
        
        console.log(data)
        this.usersRoles()
       }
       Update(): void {
        let backendRegister={
            "first_name":this.editpopupForm.value.firstName, "last_name":this.editpopupForm.value.lastName, "email": this.editpopupForm.value.EmailAddress,
            "phone_number":this.editpopupForm.value.phoneNumber,"role_id":this.editpopupForm.value.usersList,"password":this.editpopupForm.value.password
          }
          this.backendapi.edituser(backendRegister).subscribe(
            (data:any)=>{
                console.log(data)
            },
            (error:any) =>{
                console.error(error)
            }
          )
           // this.dialogRef.close();
          }
          userSelect() {
            this.selectedUser = this.editpopupForm.value.usersList;
          }       

    usersRoles(){
       this.backendapi.getuserlist().subscribe(
        (data:any) =>{
        for(let key in data.roles){
            let dumobj = {
              'value': '',
              'viewValue': ''
            };
            dumobj["value"]=data.roles[key];
            dumobj["viewValue"]=key;
            this.usersList.push(dumobj)

        }
    },
    (error:any)=>{
        console.error(error)
    }) 
    }
    }
