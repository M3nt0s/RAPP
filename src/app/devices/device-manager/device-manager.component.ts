import { Component, OnInit, Input, Output } from '@angular/core';
import { Device } from '../device.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-device-manager',
  templateUrl: './device-manager.component.html',
  styleUrls: ['./device-manager.component.scss']
})
export class DeviceManagerComponent implements OnInit {

  isEditing: boolean;
  isAdding: boolean;
  isDeleting: boolean;

  @Input() autoincrement: number;
  @Output() deviceAdded = new EventEmitter<Device>();
  @Output() deviceWasEdited = new EventEmitter<Device>();
  @Output() deviceWasDeleted = new EventEmitter<Device>();

  @Input() dev: Device;


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

  onDeviceAdd(device: Device) {
    this.deviceAdded.emit(device);
  }

  editedDevice(device: Device) {
    this.deviceWasEdited.emit(device);
  }

  deletedDevice(device: Device) {
    this.deviceWasDeleted.emit(device);
  }
}
