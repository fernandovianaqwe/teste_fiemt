import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthGuardService } from './guard/guard';

export const routes: Routes = [
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Cadastro'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Painel'
    },
    children: [
      {
        path: 'produto',
        loadChildren: () => import('./views/produto/produto.module').then(m => m.ProdutoModule),
        canActivate : [AuthGuardService]
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate : [AuthGuardService]
      },
      {
        path: 'cliente',
        loadChildren: () => import('./views/cliente/cliente.module').then(m => m.ClienteModule),
        canActivate : [AuthGuardService]
      },
      {
        path: 'pedido',
        loadChildren: () => import('./views/pedido/pedido.module').then(m => m.PedidoModule),
        canActivate : [AuthGuardService]
      }     
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
