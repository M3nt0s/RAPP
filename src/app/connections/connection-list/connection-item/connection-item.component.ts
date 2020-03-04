import { Component, OnInit, Input, Output } from '@angular/core';
import { Connection } from '../../connection.model';
import { EventEmitter } from '@angular/core';
import { Device } from "src/app/devices/device.model";
import { Employee } from "src/app/employees/employee.model";

@Component({
  selector: 'app-connection-item',
  templateUrl: './connection-item.component.html',
  styleUrls: ['./connection-item.component.scss']
})
export class ConnectionItemComponent implements OnInit {

  @Input() con: Connection;
  @Output() ConnectionSelected = new EventEmitter<void>();

  employees: Employee[];
  devices: Device[];


  constructor() { }

  ngOnInit(): void {
    this.employees = JSON.parse(localStorage.getItem("employees"));
    this.devices = JSON.parse(localStorage.getItem("devices"));

  }

  SelectedConnection() {
    this.ConnectionSelected.emit();
  }



}
