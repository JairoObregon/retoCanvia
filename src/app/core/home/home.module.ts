import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaginationComponent } from 'src/app/shared/pagination/pagination.component';

const routes: Routes = [
  {
    path: ':num',
    component: HomeComponent
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class HomeModule {}
