import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'iniciarsesion',
    loadChildren: () => import('./iniciarsesion/iniciarsesion.module').then( m => m.IniciarsesionPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'paginaprincipal',
    loadChildren: () => import('./paginaprincipal/paginaprincipal.module').then( m => m.PaginaprincipalPageModule)
  },
  {
    path: 'infoarticulo',
    loadChildren: () => import('./infoarticulo/infoarticulo.module').then( m => m.InfoarticuloPageModule)
  },
  {
    path: 'agregarproducto',
    loadChildren: () => import('./agregarproducto/agregarproducto.module').then( m => m.AgregarproductoPageModule)
  },
  {
    path: 'pantallaejecutivos',
    loadChildren: () => import('./pantallaejecutivos/pantallaejecutivos.module').then( m => m.PantallaejecutivosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
