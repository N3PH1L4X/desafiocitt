import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.page.html',
  styleUrls: ['./iniciarsesion.page.scss'],
})
export class IniciarsesionPage implements OnInit {

  constructor(private route: Router) {}

  ngOnInit() {
  }

  irPaginaPrincipal(){
    this.route.navigate(['paginaprincipal']);
  }

}
