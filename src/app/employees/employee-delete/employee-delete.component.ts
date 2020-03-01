import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { Employee } from '../employee.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.scss']
})
export class EmployeeDeleteComponent implements OnInit {


  @Input() emp: Employee;
  @Output() employeeDeleted = new EventEmitter<Employee>();
  @Output() deleteStateChanged = new EventEmitter<undefined>();

  @ViewChild('editId2') editIdRef2: ElementRef;
  @ViewChild('editName2') editNameRef2: ElementRef;
  @ViewChild('editSurname2') editSurNameRef2: ElementRef;
  @ViewChild('editAge2') editAgeRef2: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }


  onDeleteEmployee() {
    const editId2: number = this.editIdRef2.nativeElement.value;
    const editName2 = this.editNameRef2.nativeElement.value;
    const editSurName2 = this.editSurNameRef2.nativeElement.value;
    const editAge2 = this.editAgeRef2.nativeElement.value;
    const editedEmployee2 = new Employee(editId2, editName2, editSurName2, editAge2);

    this.employeeDeleted.emit(editedEmployee2);
  }

  changeDeleteState() {
    this.deleteStateChanged.emit();
  }
}
