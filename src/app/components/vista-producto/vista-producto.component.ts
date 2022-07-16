import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.component.html',
  styleUrls: ['./vista-producto.component.css']
})
export class VistaProductoComponent implements OnInit {

  producto: Producto = {} as Producto;
  idProducto: string = '';

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.obtenerProducto(this.productoService.getData('id'));  
  }

  //Obtener producto por id
  async obtenerProducto(idProducto: any) {
    this.productoService.obtenerProducto(idProducto).subscribe((res: any) => {
      this.producto = res; 
    })
  }

}
