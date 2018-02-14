import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import {Router,ActivatedRoute,Params}from '@angular/router';

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
  constructor(private _aRoute:ActivatedRoute,private _router:Router) {



   }

  ngOnInit() {
    this.producto=new Producto("",0,"");
    this._aRoute.params.subscribe((params)=>this.producto.nombre=params['nombre'])

    this.listaProductos.push(new Producto("https://c.static-nike.com/a/images/t_default/bm2s7exi8pp7yfmwlzhr/air-huarache-ultra-zapatillas-DNTBjzwk.jpg",10.5,"Nike"));
    this.listaProductos.push(new Producto("https://www.adidas.pe/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/default/dw7be84d16/zoom2/C77153_01_standard.jpg",8.5,"Adidas"));


  }
  agregarProducto(){
    this.listaProductos.push(this.producto);
    this.producto=new Producto("",0,"");
  }
  anadirProducto(productoAnadido:Producto){
    this.productosComprados.push(productoAnadido);
    this.totalComprados+=productoAnadido.precio;
  }
}
