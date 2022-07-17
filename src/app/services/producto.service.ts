import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Producto } from '../interfaces/producto';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private httpClient: HttpClient) { }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string) {
    return localStorage.getItem(key)
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }


  obtenerProductos(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(environment.backendUrl);
  }

  obtenerProducto(idProducto: number): Observable<Producto> {
    return this.httpClient.get<Producto>(environment.backendUrl+'/obtenerProducto/'+idProducto);
  } 

  obtenerCategorias(genero: string) {
    return this.httpClient.get(environment.backendUrl+'/obtenerCategorias/'+genero);
  }

  obtenerProductosxCategoria(genero: string, categoria: string) {
    return this.httpClient.get(environment.backendUrl+'/obtenerProductosxCategoria?genero='+genero+'&categoria='+categoria);
  }

}
