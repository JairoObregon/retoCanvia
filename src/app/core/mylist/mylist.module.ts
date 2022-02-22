import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MylistComponent } from './mylist.component';


const routes: Routes = [
  {
    path: '',
    component: MylistComponent
  },
];

@NgModule({
  declarations: [
    MylistComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class MylistModule {}
