import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DhomeComponent } from './dhome/dhome.component';
import { DrecordsComponent } from './drecords/drecords.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { AsidebarComponent } from './includes/asidebar/asidebar.component';
import { FeaturesbarComponent } from './includes/featuresbar/featuresbar.component';
import { PageNotFoundComponent } from './includes/page-not-found/page-not-found.component';


const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
          {path: 'home',component: DhomeComponent},
          {path: 'records',component: DrecordsComponent},
          {path: '',redirectTo: 'home',pathMatch: 'full'},
          {path: '**',component: PageNotFoundComponent},
        ]
      }
];

@NgModule({
  declarations: [
    DashboardComponent,
    DhomeComponent,
    DrecordsComponent,
    HeaderComponent,
    FooterComponent,
    AsidebarComponent,
    FeaturesbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
