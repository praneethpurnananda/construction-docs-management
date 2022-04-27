import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor(private router:Router) {

   }

  ngOnInit(): void {
  }

  navigate(url:string){
    this.router.navigate(['/admin/'+url])
  }
}
