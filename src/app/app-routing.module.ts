import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonLoginComponent } from './input-forms/common-login/common-login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: CommonLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
