import { createReducer, on } from '@ngrx/store';
import { cargarUsuarios, cargarUsuariosSuccess, cargarUsuariosError } from './../actions';
import { Usuario } from '../../models/usuario.model';

export interface UsuariosState {
  users: Usuario[],
  loaded: boolean,
  loading: boolean,
  error: any
}

export const usuariosInitialState: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
}

const _usuariosReducer = 
            createReducer(usuariosInitialState,

                      // Disparo acción y Coloco loading en true
                      on(cargarUsuarios, state => ({ ...state, loading:true })), // pongo a cargar en mi aplicación

                      // Cargo los usuarios que voy a recibir usuarios y establesco todas sus propiedades
                      on(cargarUsuariosSuccess, (state,{ usuarios }) => 
                                  ({ 
                                      ...state, 
                                      loading:false,
                                      loaded:true,
                                      users:[ ...usuarios]
                                    })),
                    // Muestro el error
              on(cargarUsuariosError, (state, { payload }) => ({
                ...state,
                loading: false,
                loaded: false,
                error: {
                  url: payload.url,
                  name: payload.name,
                  message: payload.message
                }
              })),

            );

export function usuariosReducer(state, action) {
    return _usuariosReducer(state, action);
}