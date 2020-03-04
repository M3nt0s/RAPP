import { Component, OnInit, Output, Input } from '@angular/core';
import { Device } from '../device.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})


export class DeviceListComponent implements OnInit {
  title: string;
  searchValue: string;

  @Output() DeviceWasSelected = new EventEmitter<Device>();
  @Input() devices: Device[];

  SelectedDevice: Device;

  constructor() {
    this.title = 'Device List';

  }

  ngOnInit(): void {
  }



  selectedItem(dev: Device) {
    this.DeviceWasSelected.emit(dev);
  }


  onSearchDevice(value: string) {
    this.searchValue = value;
  }
}
