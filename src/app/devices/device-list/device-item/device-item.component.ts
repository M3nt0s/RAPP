import { Component, OnInit, Input, Output } from '@angular/core';
import { Device } from '../../device.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html',
  styleUrls: ['./device-item.component.scss']
})
export class DeviceItemComponent implements OnInit {

  @Input() dev: Device;
  @Output() DeviceSelected = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }

  SelectedDevice() {
    this.DeviceSelected.emit();
  }



}
