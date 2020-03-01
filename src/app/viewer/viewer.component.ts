import { Component, OnInit } from '@angular/core';
import { Employee } from '../employees/employee.model';
import { Device } from '../devices/device.model';
import { Connection } from '../connections/connection.model';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  employee: Employee[];
  device: Device[];
  connection: Connection[];

  constructor() { }

  ngOnInit(): void {
    this.employee = JSON.parse(localStorage.getItem("employees"));
    this.device = JSON.parse(localStorage.getItem("devices"));
    this.connection = JSON.parse(localStorage.getItem("connections"));
  }

  
}
