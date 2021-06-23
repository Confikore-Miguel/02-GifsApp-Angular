import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarComponent } from './buscar/buscar.component';
import { GifComponent } from './gif/gif.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [BuscarComponent, GifComponent, ResultadosComponent],
  exports:[ GifComponent ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
