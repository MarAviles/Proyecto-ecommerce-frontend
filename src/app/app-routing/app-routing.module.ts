import { Component, NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { InicioComponent } from "../components/inicio/inicio.component"
import { ProductosComponent } from "../components/productos/productos.component"
import { VistaProductoComponent } from "../components/vista-producto/vista-producto.component"

const routes : Routes = [
  {
    path: '',
    redirectTo: 'inicio', pathMatch:'full'
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'producto',
    component: VistaProductoComponent
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }