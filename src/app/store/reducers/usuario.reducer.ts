import { createReducer, on } from '@ngrx/store';
import { cargarUsuario, cargarUsuarioSuccess, cargarUsuarioError } from './../actions';
import { Usuario } from '../../models/usuario.model';

export interface UsuarioState {
    id     :  string,
    user   : Usuario;
    loaded : boolean,
    loading: boolean,
    error  : any
}

export const usuarioInitialState: UsuarioState = {
    id      : null,
    user    : null,
    loaded  : false,
    loading : false,
    error   : null
};

const _usuarioReducer =
    createReducer(usuarioInitialState,

        // Disparo acción y Coloco loading en true
        on(cargarUsuario, (state, {id}) => ({ 
            ...state, 
            loading: true,
            id:id

        })), // pongo a cargar en mi aplicación

        // Cargo los usuario que voy a recibir usuario y establesco todas sus propiedades
        on(cargarUsuarioSuccess, (state, { usuario }) =>
            ({
                ...state,
                loading: false,
                loaded: true,
                user: { ...usuario}
            })),
        // Muestro el error
        on(cargarUsuarioError, (state, { payload }) =>
            ({
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

export function usuarioReducer(state, action) {
    return _usuarioReducer(state, action);
}