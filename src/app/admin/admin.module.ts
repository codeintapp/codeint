import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {path: 'signin',component: SigninComponent},
      {path: 'signup',component: SignupComponent},
      {path: 'dashboard',loadChildren: () => import('./pages/dashboard/dashboard.module').then(mod => mod.DashboardModule),},
      {path: '',redirectTo: '/admin/signin',pathMatch: 'full'},
    ]
  }
];

@NgModule({
  declarations: [
    AdminComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
