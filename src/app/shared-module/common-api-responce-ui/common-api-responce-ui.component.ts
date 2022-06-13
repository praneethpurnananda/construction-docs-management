import { Component, OnInit, Inject } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';


@Component({
  selector: 'app-common-api-responce-ui',
  templateUrl: './common-api-responce-ui.component.html',
  styleUrls: ['./common-api-responce-ui.component.css']
})
export class CommonApiResponceUiComponent implements OnInit {
  

  constructor(private _snakBar:MatSnackBar,@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit(): void {
  }
  
  cancel(){
    this._snakBar.dismiss();
  }

}
