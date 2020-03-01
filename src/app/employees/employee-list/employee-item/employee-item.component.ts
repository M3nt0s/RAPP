import { Component, OnInit, Input, Output } from '@angular/core';
import { Employee } from '../../employee.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss']
})
export class EmployeeItemComponent implements OnInit {

  @Input() emp: Employee;
  @Input() nameSearch: string;
  @Output() EmployeeSelected = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }

  SelectedEmployee() {
    this.EmployeeSelected.emit();
  }



}
