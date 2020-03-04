import { Component, OnInit, Input, Output, ElementRef, ViewChild } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Connection } from "../connection.model";
import { Device } from "src/app/devices/device.model";
import { DeviceItem } from "src/app/devices/deviceselect.model";
import { Employee } from "src/app/employees/employee.model";
import { EmployeeItem } from "src/app/employees/employeeselect.model";

@Component({
  selector: "app-connection-add",
  templateUrl: "./connection-add.component.html",
  styleUrls: ["./connection-add.component.scss"]
})
export class ConnectionAddComponent implements OnInit {

  @Input() con: Connection;
  @Input() autoincrement: number;

  employees: Employee[];
  devices: Device[];
  employeeItems: EmployeeItem[];
  deviceItems: DeviceItem[];
  SelectedConnection: Connection;

  @Output() addStateChanged = new EventEmitter<undefined>();
  @Output() connectionAdded = new EventEmitter<Connection>();

  @ViewChild("idEmployee") emplElement: ElementRef;
  @ViewChild("idDevice") devElement: ElementRef;
  @ViewChild("conDatee") datElement: Date;


  constructor() { }

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

  onAddConnection() {
    const employee = (<any>this.emplElement).value;
    const device = (<any>this.devElement).value;
    const date = (<any>this.datElement).value;
    const newConnection = new Connection(this.autoincrement, employee.id, device.id, date);
    this.connectionAdded.emit(newConnection);
  }

  changeAddState() {
    this.addStateChanged.emit();
  }
}
