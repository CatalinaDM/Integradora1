import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorteCajaComponent } from './components/corte-caja/corte-caja.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { MenuComponent } from './components/menu/menu.component';
import { PrincipalVentasComponent } from './components/principal-ventas/principal-ventas.component';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';
import { InventariosFrecuentesComponent } from './components/inventarios-frecuentes/inventarios-frecuentes.component';
import { EditarProveedorComponent } from './components/editar-proveedor/editar-proveedor.component';
import { EliminarProveedorComponent } from './components/eliminar-proveedor/eliminar-proveedor.component';
import { EntregasProveedorComponent } from './components/entregas-proveedor/entregas-proveedor.component';
import { LoginComponent } from './components/login/login.component';
import { PedidosAProveedorComponent } from './components/pedidos-a-proveedor/pedidos-a-proveedor.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/principal',
    pathMatch:'full'
  },
  {
    path:'principal',
    component:PrincipalVentasComponent
  },
  {
    path:'menu', 
    component:MenuComponent
  },
  { path: 'inventarios', 
    component: InventarioComponent, 
  },
  { path: 'inventariofrecuente', 
    component: InventariosFrecuentesComponent, 
  },
  {
    path:'notificacion', 
    component:NotificacionesComponent
  },
  {
    path:'cortedecaja',
    component:CorteCajaComponent,
  },
  {
    path:'editarprovedor', 
    component:EditarProveedorComponent
  },
  {
    path:'eliminarproveedor', 
    component:EliminarProveedorComponent
  },
  {
    path:'entregasproveedor', 
    component:EntregasProveedorComponent
  },
  {
    path:'login', 
    component:LoginComponent
  },
  {
    path:'pedidosaproveedor', 
    component:PedidosAProveedorComponent
  },
  {
    path:'proveedores', 
    component:ProveedoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
