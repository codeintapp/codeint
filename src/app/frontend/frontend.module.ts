import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FrontendComponent } from './frontend.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { SidebarComponent } from './includes/sidebar/sidebar.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { NgScrollbarModule } from 'ngx-scrollbar';



const routes: Routes = [
    {
        path: '',
        component: FrontendComponent,
        children: [
          {path: 'home',component: HomeComponent},
          {path: 'about',component: AboutComponent},
          {path: 'contact',component: ContactComponent},
          {path: '',redirectTo: '/frontend/home',pathMatch: 'full'},
          {path: '',redirectTo: '/frontend/about',pathMatch: 'full'},
          {path: '',redirectTo: '/frontend/contact',pathMatch: 'full'},
          {path: '**',component: PagenotfoundComponent},
        ]
      }
];

@NgModule({
  declarations: [
    FrontendComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PagenotfoundComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    NgScrollbarModule,
    RouterModule.forChild(routes)
  ],
  providers: [],

})
export class FrontendModule { }
