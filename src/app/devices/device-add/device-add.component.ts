import { Component, OnInit, Input, Output, ElementRef, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Device } from '../device.model';


@Component({
  selector: 'app-device-add',
  templateUrl: './device-add.component.html',
  styleUrls: ['./device-add.component.scss']
})
export class DeviceAddComponent implements OnInit {

  @Input() dev: Device;
  SelectedDevice: Device;
  @Input() autoincrement: number;

  @Output() addStateChanged = new EventEmitter<undefined>();

  @ViewChild('markInput') markInputRef: ElementRef;
  @ViewChild('modelInput') modelInputRef: ElementRef;
  @ViewChild('typeInput') typeInputRef: ElementRef;
  @Output() deviceAdded = new EventEmitter<Device>();

  constructor() {
  }

  ngOnInit(): void {
  }


  onAddDevice() {
    const devMark = this.markInputRef.nativeElement.value;
    const devModel = this.modelInputRef.nativeElement.value;
    const devType = this.typeInputRef.nativeElement.value;
    const newDevice = new Device(this.autoincrement, devMark, devModel, devType);
    this.deviceAdded.emit(newDevice);
  }

  changeAddState() {

    this.addStateChanged.emit();
  }

}
