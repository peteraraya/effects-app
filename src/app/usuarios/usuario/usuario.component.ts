import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AppState } from 'src/app/store/app.reducers';
import { Store } from '@ngrx/store';
import { cargarUsuario } from '../../store/actions/usuario.actions';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario;
  loading: boolean = false;
  error: any;
  constructor(
              private router: ActivatedRoute,
              private store: Store<AppState>,
            ) { }
          
  ngOnInit() {

    // Subscripción del store
    this.store.select('usuario').subscribe( ({user, loading, error}) =>{
      
      this.usuario = user;
      this.loading = loading;
      this.error = error;
    })

    // creamos una subscripción
    this.router.params.subscribe(({id}) =>{

      // console.log(id);

      // disparamos el store
      this.store.dispatch( cargarUsuario({id}));

    });



  }

}
