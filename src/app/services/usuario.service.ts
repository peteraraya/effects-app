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

  getUsers() {
  // necesito retornarlo porque necesito hacer algo con el en otras páginas
   return  this.http.get(`${this.url}/users?per_page=6`)
                    .pipe(
                      map( resp=> resp['data'])
                    )
  }
}
