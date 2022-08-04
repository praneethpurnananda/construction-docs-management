import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { BackendApiService } from '../../backend-api.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import jwt_decode from 'jwt-decode';
import { editUserPopupComponent } from '../../shared-module/popups/editUserPopup'


@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
  user:any={};
  token:any={};

  displayedColumns: string[] = ['id', 'first_name', 'phone_number', 'email', 'role_id','delete', 'edit' ];
  dataSource = [
   
  ];

  constructor(private backend:BackendApiService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.backenddata()
  }
  backenddata(){
    this.backend.getAllUsers().subscribe(
      (data:any) =>{
        console.log(data);
        this.dataSource=data;
      },
      (error:any) =>{
        console.error(error);
      }
      
    )
  }
  deleteUser(element:any){
    let elementValue={"user_id":element['id']}
    console.log(element);
    this.backend.deleteuser(elementValue).subscribe(
      (data:any) =>{
        console.log(data)
        if(data.status===true){
          this.backenddata();
        }
      },
      (error:any) =>{
        console.error(error)
      }
      )
  }
  EditUser(element:any){
    const dialogRef = this.dialog.open(editUserPopupComponent, {
      width: '600px',
      data: {"user_id":element['id'],"first_name":element['first_name'],"last_name":element['last_name'],"email":element['email'],"phone_number":element['phone_number'],"role_id":element["role_id"],"password":element['password']},
      disableClose:true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  
    // let editedElements={"user_id":element['id'],"first_name":element['first_name'],"last_name":element['last_name'],"email":element['email'],"phone_number":element['phone_number'],"role_id":element["role_id"]}
    // console.log(editedElements);
    // this.backend.edituser(editedElements)
  }

}
