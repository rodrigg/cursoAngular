import { Injectable } from '@angular/core';
import { Producto } from '../producto/producto';

@Injectable()
export class ProductoService {
   
  constructor(
      

  ) { }
  private listaProductos:Producto[]=[];

  getProductos(){
    
    this.listaProductos.push(new Producto("https://c.static-nike.com/a/images/t_default/bm2s7exi8pp7yfmwlzhr/air-huarache-ultra-zapatillas-DNTBjzwk.jpg",10.5,"Nike"));
    this.listaProductos.push(new Producto("https://www.adidas.pe/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/default/dw7be84d16/zoom2/C77153_01_standard.jpg",8.5,"Adidas"));
    
  }

  agregarProducto(producto:Producto){
   this.listaProductos=[... this.listaProductos,producto];
  }
}
