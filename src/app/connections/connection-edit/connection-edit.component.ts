import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { Connection } from '../connection.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-connection-edit',
  templateUrl: './connection-edit.component.html',
  styleUrls: ['./connection-edit.component.scss']
})
export class ConnectionEditComponent implements OnInit {

  constructor() { }

  @Input() con: Connection;
  @Output() connectionEdited = new EventEmitter<Connection>();

  @ViewChild('editId') editIdRef: ElementRef;
  @ViewChild('editMark') editMarkRef: ElementRef;
  @ViewChild('editModel') editModelRef: ElementRef;
  @ViewChild('editType') editTypeRef: ElementRef;

  
  @Output() editStateChanged = new EventEmitter<undefined>();


  ngOnInit(): void {
  }


  onEditConnection() {
    const editId: number = this.editIdRef.nativeElement.value;
    const editMark = this.editMarkRef.nativeElement.value;
    const editModel = this.editModelRef.nativeElement.value;
    const editType = this.editTypeRef.nativeElement.value;
    const editedConnection = new Connection(editId, editMark, editModel, editType);


    this.connectionEdited.emit(editedConnection);
  }

  changeEditState(){
    
    this.editStateChanged.emit();
  }
}
