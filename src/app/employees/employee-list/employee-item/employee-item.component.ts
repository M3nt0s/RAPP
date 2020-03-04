import { Component, OnInit, Input, Output } from '@angular/core';
import { Employee } from '../../employee.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss']
})

export class EmployeeItemComponent implements OnInit {

  @Input() employees: Employee[];
  @Input() empitem: Employee;
  @Output() EmployeeSelected = new EventEmitter<Employee>();
  searchVal: string;
  searchItems: Employee[];


  constructor() {
  }

  ngOnInit(): void {
    this.searchVal = '';
    this.functionIfInclude();
  }

  functionIfInclude() {

    this.searchItems = this.employees.filter(item => item.surname.toLocaleUpperCase().includes(this.searchVal.toLocaleUpperCase()) || item.name.toLocaleUpperCase().includes(this.searchVal.toLocaleUpperCase()));
    return true;
  }


  onSearchEmployee(value: string) {
    this.searchVal = value;
  }

  SelectedEmployee(empitem: Employee) {
    this.EmployeeSelected.emit(empitem);
  }
}



