import { Component, OnInit, Output, Input, ViewChild, ElementRef } from '@angular/core';
import { Employee } from '../employee.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})


export class EmployeeListComponent implements OnInit {
  title: string;
  empitem: Employee;

  @Input() employees: Employee[];
  @Output() EmployeeWasSelected = new EventEmitter<Employee>();

  SelectedEmployee: Employee;

  constructor() {
    this.title = 'Employee List';
  }

  ngOnInit(): void {
  }

  selectedItem(emp: Employee) {
    this.EmployeeWasSelected.emit(emp);
  }
}
