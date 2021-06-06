import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoComponent } from './produto.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutoComponent,
    data: {
      title: 'Produto'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule {}
