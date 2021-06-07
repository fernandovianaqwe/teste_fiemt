import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common'; 
import { ClienteComponent } from './cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ContentLoaderModule } from '@ngneat/content-loader';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    ContentLoaderModule,
    CommonModule,
    FormsModule,
    ClienteRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [ ClienteComponent ]
})
export class ClienteModule { }
