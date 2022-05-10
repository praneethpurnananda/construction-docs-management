import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonLoginComponent } from './input-forms/common-login/common-login.component';
import { CommonRegistrationComponent } from './input-forms/common-registration/common-registration.component';
import { ForgotPasswordComponent } from './input-forms/forgot-password/forgot-password.component';
import { CommonNewPasswordComponent } from './input-forms/common-new-password/common-new-password.component';
import { UserManagementComponent } from './admin-module/user-management/user-management.component';
import { MainLayoutComponent } from './shared-module/main-layout/main-layout.component';
import { CreateUserComponent } from './shared-module/create-user/create-user.component'
import { CommonDashboardComponent } from './shared-module/common-dashboard/common-dashboard.component';
import { ProjectManagementComponent } from './admin-module/project-management/project-management.component';
import { CreateProjectComponent } from './shared-module/create-project/create-project.component';
import { ProjectDetailedViewComponent } from './shared-module/project-detailed-view/project-detailed-view.component';
import { PaymentManagementComponent } from './admin-module/payment-management/payment-management.component';

//reception module components
import { ReceptionProjectManagementComponent } from './receptionist-module/project-management/project-management.component';
import { ReceptionUerManagementComponent } from './receptionist-module/uer-management/uer-management.component';
import { ReceptionPaymentManagementComponent } from './receptionist-module/payment-management/payment-management.component'


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: CommonLoginComponent },
  { path: 'register', component: CommonRegistrationComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'new-password', component: CommonNewPasswordComponent },
  
  {
    path: 'admin',
    component: MainLayoutComponent,
    children: [
      { path: 'projet-management', component: ProjectManagementComponent },
      { path: 'dashboard', component: CommonDashboardComponent },
      { path: 'user-management', component: UserManagementComponent },
      { path: 'create-user', component: CreateUserComponent },
      { path: 'create-project', component:CreateProjectComponent},
      { path: 'payment-management', component:PaymentManagementComponent}
    ]
  },
  {
    path: 'reception',
    component: MainLayoutComponent,
    children: [
      { path: 'projet-management', component: ReceptionProjectManagementComponent },
      { path: 'dashboard', component: CommonDashboardComponent },
      { path: 'user-management', component: ReceptionUerManagementComponent },
      { path: 'create-user', component: CreateUserComponent },
      { path: 'create-project', component:CreateProjectComponent},
      { path: 'payment-management', component:ReceptionPaymentManagementComponent}
    ]
  },
  {
    path: 'project',
    component: MainLayoutComponent,
    children:[
      { path: 'details/:id', component:ProjectDetailedViewComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
