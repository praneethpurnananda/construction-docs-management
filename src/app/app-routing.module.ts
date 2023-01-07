import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren:() =>import('./input-forms/input-forms.module').then(m=>m.InputFormsModule)},

  { path: 'u', loadChildren:() =>import('./shared-module/shared-module.module').then(m=>m.SharedModuleModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
