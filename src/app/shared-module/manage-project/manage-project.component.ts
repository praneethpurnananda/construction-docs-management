import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-project',
  templateUrl: './manage-project.component.html',
  styleUrls: ['./manage-project.component.css']
})
export class ManageProjectComponent implements OnInit {
  displayedColumns: string[] = [  'projectName' , 'customerName', 'employeeNmae', 'status' ];
  dataSource = [
    {projectNumber: 'VCA-985' ,projectName: 'project1', customerName: 'customer1', employeeNmae: 'employee1', status: 'status1'},
    {projectNumber: 'VCA-234' ,projectName: 'project2', customerName: 'customer2', employeeNmae: 'employee2', status: 'status2'},
    {projectNumber: 'VCA-145' ,projectName: 'project3', customerName: 'customer3', employeeNmae: 'employee3', status: 'status3'}
   
  ];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigate(projectNumber:string){
    this.router.navigate([`u/project/details/${projectNumber}`]);
  }
}
