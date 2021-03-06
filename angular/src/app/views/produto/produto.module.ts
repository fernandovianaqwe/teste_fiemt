import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common'; 
import { ProdutoComponent } from './produto.component';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ContentLoaderModule } from '@ngneat/content-loader';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    NgSelectModule,
    ContentLoaderModule,
    CommonModule,
    FormsModule,
    ProdutoRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [ ProdutoComponent,ProdutoComponent ]
})
export class ProdutoModule { }
