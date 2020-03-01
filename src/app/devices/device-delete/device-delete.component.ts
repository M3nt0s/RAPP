import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { Device } from '../device.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-device-delete',
  templateUrl: './device-delete.component.html',
  styleUrls: ['./device-delete.component.scss']
})
export class DeviceDeleteComponent implements OnInit {


  @Input() dev: Device;
  @Output() deviceDeleted = new EventEmitter<Device>();

  @Output() deleteStateChanged = new EventEmitter<undefined>();

  @ViewChild('editId') editIdRef: ElementRef;
  @ViewChild('editMark') editMarkRef: ElementRef;
  @ViewChild('editModel') editModelRef: ElementRef;
  @ViewChild('editType') editTypeRef: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }


  onDeleteDevice() {
    const editId: number = this.editIdRef.nativeElement.value;
    const editMark = this.editMarkRef.nativeElement.value;
    const editModel = this.editModelRef.nativeElement.value;
    const editType = this.editTypeRef.nativeElement.value;
    const editedDevice2 = new Device(editId, editMark, editModel, editType);

    this.deviceDeleted.emit(editedDevice2);
  }

  changeDeleteState() {
    this.deleteStateChanged.emit();
  }
}
