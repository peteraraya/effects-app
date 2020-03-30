import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
              private router: Router
              ) { }

  ngOnInit() {
  }

  irUsuario( id:string ){
  
    // validación
    if (!id) { // si el id es nulo no haga nada
        return;
    }
  
    this.router.navigate(['/usuario', id]);



  }

}
