import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent{

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  
  constructor(private gifsService:GifsService){}

  buscar( termino:string ){
    const valor = this.txtBuscar.nativeElement.value;
    this.gifsService.buscarGif(termino);
    this.txtBuscar.nativeElement.value ='';
  }
  
}
