import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  termino:string ='';

  get historial (){
    return this.gifsService.historial
  }

  constructor ( private gifsService:GifsService){ }
  
  algo( termino:string ){
    this.gifsService.buscarGif(termino);
  }
}
