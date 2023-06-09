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
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'classe',
    loadChildren: () => import('./classe/classe.module').then( m => m.ClassePageModule)
  },
  {
    path: 'tipofamilia',
    loadChildren: () => import('./tipofamilia/tipofamilia.module').then( m => m.TipofamiliaPageModule)
  },
  {
    path: 'iniciokid',
    loadChildren: () => import('./iniciokid/iniciokid.module').then( m => m.IniciokidPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
