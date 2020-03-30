import { NgModule } from '@angular/core';
// borramos el common module
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './usuarios/lista/lista.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';

// Creamos un arreglo de mis rutas
const routes: Routes = [
  { path:'home', component: ListaComponent},
  { path:'usuario/:id', component: UsuarioComponent},
  { path:'**', redirectTo:'home'},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
