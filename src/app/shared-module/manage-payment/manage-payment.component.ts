import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-payment',
  templateUrl: './manage-payment.component.html',
  styleUrls: ['./manage-payment.component.css']
})
export class ManagePaymentComponent implements OnInit {
  displayedColumns: string[] = ['customerName', 'projectName', 'status', ];
  dataSource = [
    {customerName: 'customer1', projectName: 'project1', status: 'status1'},
    {customerName: 'customer2', projectName: 'project2', status: 'status2'},
    {customerName: 'customer3', projectName: 'project3', status: 'status3'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
