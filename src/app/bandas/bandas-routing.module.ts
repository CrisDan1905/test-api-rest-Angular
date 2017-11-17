import { BandaComponent } from './banda/banda.component';
import { BandasComponent } from './bandas-general/bandas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'bandas', component: BandasComponent
  },
  {
    path: 'banda/:name', component: BandaComponent
  },
  {
    path: '',
    redirectTo: '/bandas',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BandasRoutingModule { }
