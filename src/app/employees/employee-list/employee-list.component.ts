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

  @Output() EmployeeWasSelected = new EventEmitter<Employee>();
  @Input() employees: Employee[];

  @Output() nameSearch = new EventEmitter<String>();

  SelectedEmployee: Employee;

  constructor() {
    this.title = 'Employee List';
  }

  ngOnInit(): void {
  }

  selectedItem(emp: Employee) {
    this.EmployeeWasSelected.emit(emp);
  }

  // myFunc(){
  //   var input, filter, ul, li, a, i, txtValue;
  //   input = document.getElementById("myInput");
  //   filter = input.value.toUpperCase();
  //   ul = document.getElementById("myUL");
  //   li = ul.getElementsByTagName("li");
  //   for (i = 0; i < li.length; i++) {
  //       a = li[i].getElementsByTagName("a")[0];
  //       txtValue = a.textContent || a.innerText;
  //       if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //           li[i].style.display = "";
  //       } else {
  //           li[i].style.display = "none";
  //       }
  //   }
  // }
}
