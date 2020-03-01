import { Component, OnInit, Input, Output, ElementRef, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Employee } from '../employee.model';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  @Input() emp: Employee;
  SelectedEmployee: Employee;
  @Input() autoincrement: number;

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('surInput') surInputRef: ElementRef;
  @ViewChild('ageInput') ageInputRef: ElementRef;
  @Output() employAdded = new EventEmitter<Employee>();

  @Output() addStateChanged = new EventEmitter<undefined>();

  constructor() {
  }

  ngOnInit(): void {
  }


  onAddEmployee() {
    const empName = this.nameInputRef.nativeElement.value;
    const empSur = this.surInputRef.nativeElement.value;
    const empAge = this.ageInputRef.nativeElement.value;
    const newEmploy = new Employee(this.autoincrement, empName, empSur, empAge);
    this.employAdded.emit(newEmploy);
  }

  changeAddState() {

    this.addStateChanged.emit();
  }
}
