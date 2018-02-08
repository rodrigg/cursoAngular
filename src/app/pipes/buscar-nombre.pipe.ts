import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../producto/producto';

@Pipe({
  name: 'buscarNombre',
  pure: false
})
export class BuscarNombrePipe implements PipeTransform {
    
  transform(productos:Producto[], nombre?:string ): Producto[] {

   let productosBuscados:Producto[]=[];
      if(!nombre){
        productosBuscados=productos;
        
      }
      else{
        for(let producto of productos){
        
          if(producto.nombre.toLocaleLowerCase().indexOf(nombre.toLowerCase())>-1){
            console.log(producto.nombre);
            console.log(nombre);
            productosBuscados.push(producto);
  
          }
        }
      }
     

    return productosBuscados;
  }

}
