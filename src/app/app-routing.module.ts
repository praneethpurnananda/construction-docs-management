import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonLoginComponent } from './input-forms/common-login/common-login.component';
import { CommonRegistrationComponent } from './input-forms/common-registration/common-registration.component';
import { ForgotPasswordComponent } from './input-forms/forgot-password/forgot-password.component';
import { CommonNewPasswordComponent } from './input-forms/common-new-password/common-new-password.component';
import { UserManagementComponent } from './admin-module/user-management/user-management.component';
import { MainLayoutComponent } from './shared-module/main-layout/main-layout.component';
import { CreateUserComponent } from './shared-module/create-user/create-user.component'


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: CommonLoginComponent },
  { path: 'register', component: CommonRegistrationComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'new-password', component: CommonNewPasswordComponent},
  { 
    path: 'admin', 
    component: MainLayoutComponent,
    children: [
      {path:'user-management', component: UserManagementComponent},
      {path:'create-user', component: CreateUserComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
