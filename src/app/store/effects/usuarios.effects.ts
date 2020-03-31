// Aquí vamos a colocar todos  los efectos que tengan que trabajar  con acciones que tengan qye ver con los usuarios
// para los efectos no es mas que un simple servicio de angular

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions/usuarios.action';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { of } from 'rxjs';


@Injectable()
export class UsuariosEffects{

// 

    constructor( 
            // es un observable que está escuchando las acciones
            private actions$: Actions,
            private usuariosService: UsuarioService
        )
        {}


    cargarUsuarios$ = createEffect(
        // necesita un callback() que regrese un observable
        () => this.actions$.pipe(
            ofType( usuariosActions.cargarUsuarios ), // puedo especificar cual es la acción que a mi me interesa escuchar
            // tap( data => console.log('effect tap ',data) ),
            // disparo un nuevo observable que se va encargar de pedir la nueva info
            mergeMap(
                ( ) => this.usuariosService.getUsers()
                        .pipe(
                            map(users => usuariosActions.cargarUsuariosSuccess({ usuarios: users })),
                            catchError(err => of(usuariosActions.cargarUsuariosError({ payload: err })))
                            // tap( data => console.log('getUsers effetc ', data))
                        )
            ) // nos va ayudar a disparar un nuevo observable y mesclarlo con el observable anterior

        )
    );




    // catchError : va a atrapar cualquier error que suceda en la petición --> 404 , 500
    // catchError no regresa un observable

    // of es para crear un observable

}