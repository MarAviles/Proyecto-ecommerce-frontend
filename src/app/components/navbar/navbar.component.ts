import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit(): void {
    
  }

  mostrarDatos(genero: string) {
    this.productoService.clearData();
    this.productoService.saveData('genero', genero);
    this.productoService.saveData('tipo', 'Playeras');
    this.router.navigate(['/productos'])
    .then(() => {
      window.location.reload();
    });
  }

}
