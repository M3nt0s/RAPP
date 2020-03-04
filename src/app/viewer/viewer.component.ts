import { Component, OnInit } from "@angular/core";
import { Employee } from "../employees/employee.model";
import { Device } from "../devices/device.model";
import { Connection } from "../connections/connection.model";

@Component({
  selector: "app-viewer",
  templateUrl: "./viewer.component.html",
  styleUrls: ["./viewer.component.scss"]
})
export class ViewerComponent implements OnInit {
  employee: Employee[];
  device: Device[];
  connection: Connection[];
  searchVal: string;
  searchItems: Employee[];


  constructor() { }

  ngOnInit(): void {
    this.searchVal = '';
    this.employee = JSON.parse(localStorage.getItem("employees"));
    this.device = JSON.parse(localStorage.getItem("devices"));
    this.connection = JSON.parse(localStorage.getItem("connections"));
  }

  functionIfInclude() {

    this.searchItems = this.employee.filter(item => item.surname.toLocaleUpperCase().includes(this.searchVal.toLocaleUpperCase()) || item.name.toLocaleUpperCase().includes(this.searchVal.toLocaleUpperCase()));
    return true;
  }

  onSearchViewer(value: string) {
    this.searchVal = value;
  }
}
