import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { SharedModuleModule }from '../shared-module/shared-module.module'


import { ReceptionPaymentManagementComponent } from './payment-management/payment-management.component';
import { ReceptionProjectManagementComponent } from './project-management/project-management.component';
import { ReceptionUerManagementComponent } from './uer-management/uer-management.component';



@NgModule({
  declarations: [ReceptionPaymentManagementComponent, ReceptionProjectManagementComponent, ReceptionUerManagementComponent],
  imports: [
    CommonModule,
    SharedModuleModule,
    MatButtonModule
  ]
})
export class ReceptionistModuleModule { }
