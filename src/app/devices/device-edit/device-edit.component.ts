import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { Device } from '../device.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.scss']
})
export class DeviceEditComponent implements OnInit {

  constructor() { }

  @Input() dev: Device;
  @Output() deviceEdited = new EventEmitter<Device>();

  @ViewChild('editId') editIdRef: ElementRef;
  @ViewChild('editMark') editMarkRef: ElementRef;
  @ViewChild('editModel') editModelRef: ElementRef;
  @ViewChild('editType') editTypeRef: ElementRef;


  @Output() editStateChanged = new EventEmitter<undefined>();


  ngOnInit(): void {
  }


  onEditDevice() {
    const editId: number = this.editIdRef.nativeElement.value;
    const editMark = this.editMarkRef.nativeElement.value;
    const editModel = this.editModelRef.nativeElement.value;
    const editType = this.editTypeRef.nativeElement.value;
    const editedDevice = new Device(editId, editMark, editModel, editType);


    this.deviceEdited.emit(editedDevice);
  }

  changeEditState() {

    this.editStateChanged.emit();
  }
}
