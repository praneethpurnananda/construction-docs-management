import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//components

//internal modules
import { InputFormsModule } from './input-forms/input-forms.module';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { AdminModuleModule } from './admin-module/admin-module.module';
import { ReceptionistModuleModule } from './receptionist-module/receptionist-module.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputFormsModule,
    SharedModuleModule,
    AdminModuleModule,
    ReceptionistModuleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
