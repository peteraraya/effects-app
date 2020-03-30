import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
 //necesario para conocer los router link
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[ // Si pretendo usar componentes fueras del Shared debo exportarlos
    NavbarComponent
  ]
})
export class SharedModule { }
