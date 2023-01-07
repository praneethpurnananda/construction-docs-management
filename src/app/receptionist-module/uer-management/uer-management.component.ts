import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uer-management',
  templateUrl: './uer-management.component.html',
  styleUrls: ['./uer-management.component.css']
})
export class ReceptionUerManagementComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigate(url:string){
    this.router.navigate(['/u/reception/'+url])
  }
}
