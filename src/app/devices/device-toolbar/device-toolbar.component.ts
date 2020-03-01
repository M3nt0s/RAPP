import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Device } from '../device.model';

@Component({
  selector: 'app-device-toolbar',
  templateUrl: './device-toolbar.component.html',
  styleUrls: ['./device-toolbar.component.scss']
})
export class DeviceToolbarComponent implements OnInit {

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
