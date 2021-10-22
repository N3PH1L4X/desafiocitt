import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infoarticulo',
  templateUrl: './infoarticulo.page.html',
  styleUrls: ['./infoarticulo.page.scss'],
})
export class InfoarticuloPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }


  volverPaginaPrincipal(){
    this.route.navigate(['paginaprincipal']);
  }
}
