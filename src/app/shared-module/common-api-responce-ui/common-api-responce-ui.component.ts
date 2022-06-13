import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-common-api-responce-ui',
  templateUrl: './common-api-responce-ui.component.html',
  styleUrls: ['./common-api-responce-ui.component.css']
})
export class CommonApiResponceUiComponent implements OnInit {
  

  constructor(private _snakBar:MatSnackBar) { }

  ngOnInit(): void {
  }
  cancel(){
    this._snakBar.dismiss();
  }

}
