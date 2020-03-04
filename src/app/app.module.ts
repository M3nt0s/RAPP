import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TabMenuModule } from 'primeng/tabmenu';
import { AccordionModule } from 'primeng/accordion';
import { CalendarModule } from 'primeng/calendar';
import { KeyFilterModule } from 'primeng/keyfilter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { DevicesComponent } from './devices/devices.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { ConnectionsComponent } from './connections/connections.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { EmployeeAddComponent } from './employees/employee-add/employee-add.component';
import { EmployeeItemComponent } from './employees/employee-list/employee-item/employee-item.component';
import { DeviceDetailComponent } from './devices/device-detail/device-detail.component';
import { DeviceEditComponent } from './devices/device-edit/device-edit.component';
import { DeviceListComponent } from './devices/device-list/device-list.component';
import { DeviceItemComponent } from './devices/device-list/device-item/device-item.component';
import { EmployeeManagerComponent } from './employees/employee-manager/employee-manager.component';
import { EmployeeToolbarComponent } from './employees/employee-toolbar/employee-toolbar.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { EmployeeDeleteComponent } from './employees/employee-delete/employee-delete.component';
import { DeviceAddComponent } from './devices/device-add/device-add.component';
import { DeviceDeleteComponent } from './devices/device-delete/device-delete.component';
import { DeviceManagerComponent } from './devices/device-manager/device-manager.component';
import { DeviceToolbarComponent } from './devices/device-toolbar/device-toolbar.component';
import { ConnectionAddComponent } from './connections/connection-add/connection-add.component';
import { ConnectionDeleteComponent } from './connections/connection-delete/connection-delete.component';
import { ConnectionDetailComponent } from './connections/connection-detail/connection-detail.component';
import { ConnectionEditComponent } from './connections/connection-edit/connection-edit.component';
import { ConnectionListComponent } from './connections/connection-list/connection-list.component';
import { ConnectionItemComponent } from './connections/connection-list/connection-item/connection-item.component';
import { ConnectionManagerComponent } from './connections/connection-manager/connection-manager.component';
import { ConnectionToolbarComponent } from './connections/connection-toolbar/connection-toolbar.component';
import { ViewerComponent } from './viewer/viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    DevicesComponent,
    LeftbarComponent,
    ConnectionsComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeAddComponent,
    EmployeeItemComponent,
    DeviceDetailComponent,
    DeviceEditComponent,
    DeviceListComponent,
    DeviceItemComponent,
    EmployeeManagerComponent,
    EmployeeToolbarComponent,
    EmployeeEditComponent,
    EmployeeDeleteComponent,
    DeviceAddComponent,
    DeviceDeleteComponent,
    DeviceManagerComponent,
    DeviceToolbarComponent,
    ConnectionAddComponent,
    ConnectionDeleteComponent,
    ConnectionDetailComponent,
    ConnectionEditComponent,
    ConnectionListComponent,
    ConnectionItemComponent,
    ConnectionManagerComponent,
    ConnectionToolbarComponent,
    ViewerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    AccordionModule,
    CalendarModule,
    FormsModule,
    KeyFilterModule,
    BrowserAnimationsModule,
    DropdownModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
