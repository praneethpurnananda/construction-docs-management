import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';


//components
import { CreateUserComponent } from './create-user/create-user.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { CommonDashboardComponent } from './common-dashboard/common-dashboard.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ManageProjectComponent } from './manage-project/manage-project.component';
import { ProjectDetailedViewComponent } from './project-detailed-view/project-detailed-view.component';
import { ManagePaymentComponent } from './manage-payment/manage-payment.component';
import { PreloderComponent } from './preloder/preloder.component';
import { CommonApiResponceUiComponent } from './common-api-responce-ui/common-api-responce-ui.component';
import { OtpComponet } from './popups/opt.component';
import { editUserPopupComponent } from './popups/editUserPopup'
import { RouterModule, Routes } from '@angular/router';  
import { ProjectManagementComponent } from '../admin-module/project-management/project-management.component';
import { UserManagementComponent } from '../admin-module/user-management/user-management.component';
import { PaymentManagementComponent } from '../admin-module/payment-management/payment-management.component';
import { ReceptionProjectManagementComponent } from '../receptionist-module/project-management/project-management.component';
import { ReceptionUerManagementComponent } from '../receptionist-module/uer-management/uer-management.component';
import { ReceptionPaymentManagementComponent } from '../receptionist-module/payment-management/payment-management.component';

const routes:Routes =[
 { path:'admin', component:MainLayoutComponent, children:[
    { path: 'projet-management', component: ProjectManagementComponent },
    { path: 'dashboard', component: CommonDashboardComponent },
    { path: 'user-management', component: UserManagementComponent },
    { path: 'create-user', component: CreateUserComponent },
    { path: 'create-project', component:CreateProjectComponent},
    { path: 'payment-management', component:PaymentManagementComponent}
  ]},

  { path:'reception', component:MainLayoutComponent, children:[
    { path: 'projet-management', component: ReceptionProjectManagementComponent },
    { path: 'dashboard', component: CommonDashboardComponent },
    { path: 'user-management', component: ReceptionUerManagementComponent },
    { path: 'create-user', component: CreateUserComponent },
    { path: 'create-project', component:CreateProjectComponent},
    { path: 'payment-management', component:ReceptionPaymentManagementComponent}
  ]},

  { path: 'project',component: MainLayoutComponent, children:[
        { path: 'details/:id', component:ProjectDetailedViewComponent},
      ]
    },

    { path: 'customer',component:MainLayoutComponent, children:[
        // { path: 'dashboard'},
        // { path: 'projects'}
      ]
    },

    { path: 'employee',component:MainLayoutComponent, children:[
        // { path: 'dashboard'},
        // { path: 'customer-details'}
      ]
    }

]

@NgModule({
  declarations: [CreateUserComponent, ManageUserComponent, MainLayoutComponent, CommonDashboardComponent, CreateProjectComponent, ManageProjectComponent, ProjectDetailedViewComponent, ManagePaymentComponent, PreloderComponent, CommonApiResponceUiComponent, OtpComponet,editUserPopupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ],
  exports: [ManageUserComponent, ManageProjectComponent, ManagePaymentComponent, PreloderComponent, CommonApiResponceUiComponent]
})
export class SharedModuleModule { }
