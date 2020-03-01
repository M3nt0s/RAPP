import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Connection } from '../connection.model';

@Component({
  selector: 'app-connection-toolbar',
  templateUrl: './connection-toolbar.component.html',
  styleUrls: ['./connection-toolbar.component.scss']
})
export class ConnectionToolbarComponent implements OnInit {

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
