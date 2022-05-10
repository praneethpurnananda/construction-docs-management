import { NgModule } from '@angular/core';


import { CommonModule } from '@angular/common';

//modules
import { MatButtonModule } from '@angular/material/button';
import { SharedModuleModule }from '../shared-module/shared-module.module'

//components
import { UserManagementComponent } from './user-management/user-management.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { PaymentManagementComponent } from './payment-management/payment-management.component';




@NgModule({
  declarations: [UserManagementComponent, ProjectManagementComponent, PaymentManagementComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    SharedModuleModule
  ]
})
export class AdminModuleModule { }
