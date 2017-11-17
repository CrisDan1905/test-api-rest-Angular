import { BandasComponent } from './bandas-general/bandas.component';
import { BandaComponent } from './banda/banda.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandasRoutingModule } from './bandas-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BandasRoutingModule
  ],
  declarations: [
    BandaComponent,
    BandasComponent
  ],
  exports: [
    BandasComponent,
    BandaComponent
  ]
})
export class BandasModule { }
