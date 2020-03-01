import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { Employee } from '../employee.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  constructor() { }

  @Input() emp: Employee;
  @Output() employeeEdited = new EventEmitter<Employee>();

  @ViewChild('editId') editIdRef: ElementRef;
  @ViewChild('editName') editNameRef: ElementRef;
  @ViewChild('editSurname') editSurNameRef: ElementRef;
  @ViewChild('editAge') editAgeRef: ElementRef;

  @Output() editStateChanged = new EventEmitter<undefined>();

  ngOnInit(): void {
  }


  onEditEmployee() {
    const editId: number = this.editIdRef.nativeElement.value;
    const editName = this.editNameRef.nativeElement.value;
    const editSurName = this.editSurNameRef.nativeElement.value;
    const editAge = this.editAgeRef.nativeElement.value;
    const editedEmployee = new Employee(editId, editName, editSurName, editAge);


    this.employeeEdited.emit(editedEmployee);
  }

  changeEditState() {

    this.editStateChanged.emit();
  }
}
