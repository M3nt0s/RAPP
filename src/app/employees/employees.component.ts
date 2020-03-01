import { Component, OnInit } from "@angular/core";
import { Employee } from "./employee.model";


@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.scss"]
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  SelectedEmployee: Employee;
  autoincrement: number;
  increment:number;

  constructor() {
    this.autoincrement = 1;
    this.employees = [];
    this.increment = 1;
  }

  ngOnInit(): void {
    this.storageFunction();
  };

  storageSave() {
    localStorage.setItem("employees", JSON.stringify(this.employees));
  }

  storageFunction() {
    var data = JSON.parse(localStorage.getItem("employees"));

    // if (data === null) {
      // this.addEmployee(new Employee(this.autoincrement, 'Dominik', 'Latas', 21));
      // this.addEmployee(new Employee(this.autoincrement, 'Norbert', 'Bankowski', 26));
    // }

    if (!(data === null)) {
      for (var i = 0; i < data.length; i++) {

        if ((i) === (data.length - 1)) {
          this.autoincrement = (data[data.length - 1].id) + this.increment;
        }
        this.employees.push(data[i]);
      }
    }
  }


  addEmployee(employee: Employee) {
    this.employees.push(employee);
    this.storageSave();
    location.reload();
    this.autoincrement++;
  }


  editEmployee(employee: Employee) {
    const index = this.employees.findIndex(x => {
      return x.id == employee.id;
    });
    console.log(employee.id);
    this.employees[index] = employee;
    this.storageSave();
  }

  deleteEmployee(employee: Employee) {

    const indexx = this.employees.findIndex(x => {
      return x.id == employee.id;
    });
    if (indexx > -1) {
      this.employees.splice(indexx, 1);
    }
    this.storageSave();
    location.reload();
  }
}
