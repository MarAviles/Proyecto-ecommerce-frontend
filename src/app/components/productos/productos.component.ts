import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[]=[];
  genero: any;
  categoriaSelecionada: any = this.productoService.getData('tipo');
  categorias: any[] = [];

  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit(): void {

    this.genero = this.productoService.getData('genero');

    this.productoService.busquedaTipo(this.genero).subscribe((res: any) =>{
      this.categorias = res;
      console.log(this.categorias);
    });

    this.obtenerProductosxTipo(this.categoriaSelecionada);    
  }

  obtenerProductosxTipo(categoria: string){
    this.productoService.saveData('tipo', categoria);
    this.categoriaSelecionada = this.productoService.getData('tipo');
    
    this.productoService.obtenerProductosxTipo(this.genero, categoria).subscribe((res: any) =>{
      this.productos = res;
    });
  }

  obtenerId(id: number) {
    this.productoService.saveData('id', id.toString());
    this.router.navigate(['/producto']);
  }

}
