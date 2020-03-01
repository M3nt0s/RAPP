import { Component, OnInit, Input } from '@angular/core';
import { Device } from '../device.model';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss']
})
export class DeviceDetailComponent implements OnInit {

  title = 'Devices Details.';

  @Input() dev: Device;

  constructor() { }

  ngOnInit(): void {
  }
}
