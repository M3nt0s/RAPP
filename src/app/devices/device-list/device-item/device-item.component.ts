import { Component, OnInit, Input, Output } from '@angular/core';
import { Device } from '../../device.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html',
  styleUrls: ['./device-item.component.scss']
})

export class DeviceItemComponent implements OnInit {

  @Input() devices: Device[];
  @Input() devitem: Device;
  @Output() DeviceSelected = new EventEmitter<Device>();
  searchVal: string;
  searchItems: Device[];


  constructor() {
  }

  ngOnInit(): void {
    this.searchVal = '';
    this.functionIfInclude();
  }

  functionIfInclude() {

    this.searchItems = this.devices.filter(item => item.mark.toLocaleUpperCase().includes(this.searchVal.toLocaleUpperCase()) || item.model.toLocaleUpperCase().includes(this.searchVal.toLocaleUpperCase()) || item.type.toLocaleUpperCase().includes(this.searchVal.toLocaleUpperCase()));
    return true;
  }


  onSearchDevice(value: string) {
    this.searchVal = value;
  }

  SelectedDevice(devitem: Device) {
    this.DeviceSelected.emit(devitem);
  }
}



