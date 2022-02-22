import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardComponent
    
  ],
  imports: [
    CommonModule, 
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardComponent
  ],

})
export class SharedModule { }
