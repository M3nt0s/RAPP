import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  title = 'Employee Details.';

  @Input() emp: Employee;

  constructor() { }

  ngOnInit(): void {
  }
}
