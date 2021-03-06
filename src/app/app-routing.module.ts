import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import { EmployeesComponent } from './employees/employees.component';
import { ConnectionsComponent } from './connections/connections.component';
import { ViewerComponent } from './viewer/viewer.component';



const routes: Routes = [

  { path: "", component: EmployeesComponent },
  { path: "Employees", component: EmployeesComponent },
  { path: "Devices", component: DevicesComponent },
  { path: "Connections", component: ConnectionsComponent },
  { path: "Viewer", component: ViewerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
