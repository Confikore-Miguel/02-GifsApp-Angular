import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gifs, RESTgifs } from '../interface/gifs.interface';
@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private api_key:string = 'E44F9W8zKkRjN0xAHzWYnN0KroqMguaK';
  private _historial:string[]=[];
  public resultados:Gifs[]=[];

  get historial():any{
    return [...this._historial];
  }

  constructor( private http: HttpClient ) {

    if ( localStorage.getItem('historial') ){
      this._historial=  JSON.parse( localStorage.getItem('historial')!);
      this.buscarGif(this._historial[0])
    }

    }

  buscarGif( query:string ){
    query= query.toLocaleLowerCase();
    if( query.trim().length === 0){ return; }
    if( !this._historial.includes( query )){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial',JSON.stringify(this._historial));
    }

    const params = new HttpParams()
                .set('api_key',this.api_key)
                .set('q', query)
                .set('lang','es')
                .set('limit','10')          

    this.http.get<RESTgifs>(`https://api.giphy.com/v1/gifs/search?`,{params})
    .subscribe( (resp )=>{
      this.resultados = resp.data;
    } )

  }



}
