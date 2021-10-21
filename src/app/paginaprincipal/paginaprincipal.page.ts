import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginaprincipal',
  templateUrl: './paginaprincipal.page.html',
  styleUrls: ['./paginaprincipal.page.scss'],
})
export class PaginaprincipalPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 700
  };

  constructor(private route: Router) { }

  ngOnInit() {
  }

  irInfoArticulo(){
    this.route.navigate(['infoarticulo']);
  }

  irAgregarProducto(){
    this.route.navigate(['agregarproducto']);
  }

  cerrarSesion(){
    this.route.navigate(['home']);
  }

}
