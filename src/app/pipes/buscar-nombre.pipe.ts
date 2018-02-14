import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../producto/producto';

@Pipe({
  name: 'buscarNombre',
  pure: false
})
export class BuscarNombrePipe implements PipeTransform {
    
  transform(productos:Producto[], nombre?:string ): Producto[] {

   let productosBuscados:Producto[]=[];
    //productos.filter(producto=>producto.nombre.indexOf(nombre)>-1)
      if(!nombre){
        productosBuscados=productos;
        
      }
      else{
        for(let producto of productos){
          if(producto.nombre.toLowerCase().indexOf(nombre.toLowerCase())>-1){
              productosBuscados.push(producto);
  
          }
        }
      }
     
    return productosBuscados;
  }

}
