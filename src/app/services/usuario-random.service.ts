import { Injectable } from '@angular/core';
import { Http , Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioRandomService {
private url='https://randomuser.me/api/'
  constructor(private _http:Http) { }


getUsuario(){
    

  return this._http.get(this.url).map(usuario=>usuario.json().results[0]);
}



}