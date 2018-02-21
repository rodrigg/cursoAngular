import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import {Router,ActivatedRoute,Params}from '@angular/router';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  public producto:Producto;
  public listaProductos:Producto[]=[];
  public buscarNombre:string;
  public productosComprados:Producto[]=[];
  public totalComprados:number=0;
  constructor(private _aRoute:ActivatedRoute,private _router:Router,
              private pService:ProductoService) {



   }

  ngOnInit() {
    this.producto=new Producto("",0,"");
    this._aRoute.params.subscribe((params)=>this.producto.nombre=params['nombre'])
    this.pService.getProductos();
    


  }
  agregarProducto(){
    this.pService.agregarProducto(this.producto);
    this.producto=new Producto("",0,"");
  }
  anadirProducto(productoAnadido:Producto){
    this.productosComprados.push(productoAnadido);
    this.totalComprados+=productoAnadido.precio;
  }
}
