import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FrontendComponent } from './frontend/frontend.component';

const routes: Routes = [
  { path: 'frontend', loadChildren: () => import('./frontend/frontend.module').then(mod => mod.FrontendModule), },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule), },
  { path: '',   redirectTo: '/frontend/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
