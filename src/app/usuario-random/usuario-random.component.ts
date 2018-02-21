import { Component, OnInit } from '@angular/core';
import { UsuarioRandomService } from '../services/usuario-random.service';

@Component({
  selector: 'app-usuario-random',
  templateUrl: './usuario-random.component.html',
  styleUrls: ['./usuario-random.component.css'],
  providers:[UsuarioRandomService]
})
export class UsuarioRandomComponent implements OnInit {
  private user:any={name:{}}
  constructor(private _userService:UsuarioRandomService) { }
  
  ngOnInit() {
    this._userService.getUsuario().subscribe(userData=>{this.user=userData})
  }

}
