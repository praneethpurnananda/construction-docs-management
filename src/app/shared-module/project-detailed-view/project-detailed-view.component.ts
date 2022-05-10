import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detailed-view',
  templateUrl: './project-detailed-view.component.html',
  styleUrls: ['./project-detailed-view.component.css']
})
export class ProjectDetailedViewComponent implements OnInit {
  currentProjectId : string = '';


  constructor(private acivatedRouter:ActivatedRoute) { }


  ngOnInit(): void {
   
    this.acivatedRouter.params.subscribe(
      data => {
        console.log(data)
        this.currentProjectId = data['id'];
      }
    )
  }

}
