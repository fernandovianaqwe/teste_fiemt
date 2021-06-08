import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common'; 
import { PedidoComponent } from './pedido.component';
import { PedidoRoutingModule } from './pedido-routing.module';
import { ContentLoaderModule } from '@ngneat/content-loader';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    ContentLoaderModule,
    CommonModule,
    FormsModule,
    PedidoRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [ PedidoComponent ]
})
export class PedidoModule { }
