import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-toolbar',
  templateUrl: './employee-toolbar.component.html',
  styleUrls: ['./employee-toolbar.component.scss']
})
export class EmployeeToolbarComponent implements OnInit {

  @Output() onToolbarAdd = new EventEmitter<undefined>();
  @Output() onToolbarEdit = new EventEmitter<undefined>();
  @Output() onToolbarDelete = new EventEmitter<undefined>();

  constructor() { }

  ngOnInit(): void {
  }

  addButton() {
    this.onToolbarAdd.emit();
  }

  editButton() {
    this.onToolbarEdit.emit();
  }

  deleteButton() {
    this.onToolbarDelete.emit();
  }
}
