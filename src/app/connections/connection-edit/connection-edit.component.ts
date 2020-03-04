import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { Connection } from '../connection.model';
import { EventEmitter } from '@angular/core';
import { Device } from "src/app/devices/device.model";
import { DeviceItem } from "src/app/devices/deviceselect.model";
import { Employee } from "src/app/employees/employee.model";
import { EmployeeItem } from "src/app/employees/employeeselect.model";

@Component({
  selector: 'app-connection-edit',
  templateUrl: './connection-edit.component.html',
  styleUrls: ['./connection-edit.component.scss']
})
export class ConnectionEditComponent implements OnInit {

  constructor() { }

  @Input() con: Connection;

  @Output() connectionEdited = new EventEmitter<Connection>();
  @Output() editStateChanged = new EventEmitter<undefined>();

  @ViewChild("editId") editIdRef: ElementRef;
  @ViewChild("idEmployee") emplElement: ElementRef;
  @ViewChild("idDevice") devElement: ElementRef;
  @ViewChild("conDatee") datElement: Date;

  employees: Employee[];
  devices: Device[];

  employeeItems: EmployeeItem[];
  deviceItems: DeviceItem[];


  ngOnInit(): void {

    this.employees = JSON.parse(localStorage.getItem("employees"));
    this.devices = JSON.parse(localStorage.getItem("devices"));

    this.employeeItems = this.employees.map(item => {
      return { ...item, value: `${item.name} ${item.surname}` };
    });

    this.deviceItems = this.devices.map(item => {
      return { ...item, value: `${item.mark} ${item.model}` };
    });
  }


  onEditConnection() {
    const editId: number = this.editIdRef.nativeElement.value;
    const employee = (<any>this.emplElement).value;
    const device = (<any>this.devElement).value;
    const date = (<any>this.datElement).value;
    const editedConnection = new Connection(editId, employee.id, device.id, date);
    this.connectionEdited.emit(editedConnection);
  }



  changeEditState() {

    this.editStateChanged.emit();
  }
}
