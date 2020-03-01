import { Component, OnInit, Input, Output } from '@angular/core';
import { Employee } from '../employee.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-manager',
  templateUrl: './employee-manager.component.html',
  styleUrls: ['./employee-manager.component.scss']
})
export class EmployeeManagerComponent implements OnInit {

  isEditing: boolean;
  isAdding: boolean;
  isDeleting: boolean;

  @Input() autoincrement: number;
  @Output() employeeAdded = new EventEmitter<Employee>();
  @Output() employeeWasEdited = new EventEmitter<Employee>();
  @Output() employeeWasDeleted = new EventEmitter<Employee>();

  @Input() emp: Employee;


  constructor() {
    this.isAdding = false;
    this.isEditing = false;
    this.isDeleting = false;
  }

  ngOnInit(): void {
  }


  toolbarAdd() {
    this.isAdding = !this.isAdding;

    if (this.isAdding === true && (this.isEditing === true) || this.isDeleting === true) {
      this.isEditing = false;
      this.isDeleting = false;
    }
  }

  toolbarEdit() {
    this.isEditing = !this.isEditing;

    if (this.isEditing === true && (this.isEditing === true) || this.isDeleting === true) {
      this.isDeleting = false;
      this.isAdding = false;
    }
  }

  toolbarDelete() {
    this.isDeleting = !this.isDeleting;

    if (this.isDeleting === true && (this.isEditing === true) || this.isAdding === true) {
      this.isEditing = false;
      this.isAdding = false;
    }
  }

  onEmployeeAdd(employee: Employee) {
    this.employeeAdded.emit(employee);
  }

  editedEmployee(employee: Employee) {
    this.employeeWasEdited.emit(employee);
  }

  deletedEmployee(employee: Employee) {
    this.employeeWasDeleted.emit(employee);
  }
}
