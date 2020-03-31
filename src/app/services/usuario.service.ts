import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class UsuarioService {

  private url = "https://reqres.in/api";

  constructor(
    // todo lo que necesito para conectarme a servicios
    private http: HttpClient
  ) {}

  // Traer todos los usuarios
  // necesito retornarlo porque necesito hacer algo con el en otras páginas
    getUsers() {
      return this.http.get(`${this.url}/users?per_page=6&delay=3`)
        .pipe(
          map(resp => resp['data'])
        );
    }

  // Traer un unico usuario
  getUserById(id: string) {
    return this.http.get(`${this.url}/users/${id}`)
      .pipe(
        map(resp => resp['data'])
      );
  }

}
