import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http , Response, Headers} from '@angular/http';
import { Articulo } from '../articulos/articulo';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticuloService {
  public url;string
  constructor(public _http:Http) { 

    this.url="https://jsonplaceholder.typicode.com/posts";
  }
  getArticulos():Observable<Array<Articulo>>{
    

    return this._http.get(this.url).map(articulos=>articulos.json());
  }
}

