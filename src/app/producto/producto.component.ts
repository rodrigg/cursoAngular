import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  public listaProductos:Producto[]=[];
  public productosComprados:Producto[]=[];
  public totalComprados:number=0;
  constructor() { }

  ngOnInit() {
    this.listaProductos.push(new Producto("https://c.static-nike.com/a/images/t_default/bm2s7exi8pp7yfmwlzhr/air-huarache-ultra-zapatillas-DNTBjzwk.jpg",10.5,"Nike"));
    this.listaProductos.push(new Producto("https://www.adidas.pe/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/default/dw7be84d16/zoom2/C77153_01_standard.jpg",8.5,"Adidas"));
    this.listaProductos.push(new Producto("https://www.adidas.pe/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/default/dw7be84d16/zoom2/C77153_01_standard.jpg",8.5,"Adidas"));


  }
  anadirProducto(productoAnadido:Producto){
    this.productosComprados.push(productoAnadido);
    this.totalComprados+=productoAnadido.precio;
  }
}
