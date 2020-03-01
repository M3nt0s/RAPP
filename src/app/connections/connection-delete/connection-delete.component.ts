import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { Connection } from '../connection.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-connection-delete',
  templateUrl: './connection-delete.component.html',
  styleUrls: ['./connection-delete.component.scss']
})
export class ConnectionDeleteComponent implements OnInit {


  @Input() con: Connection;
  @Output() connectionDeleted = new EventEmitter<Connection>();
  
  @Output() deleteStateChanged = new EventEmitter<undefined>();

  @ViewChild('editId') editIdRef: ElementRef;
  @ViewChild('editMark') editMarkRef: ElementRef;
  @ViewChild('editModel') editModelRef: ElementRef;
  @ViewChild('editType') editTypeRef: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }


  onDeleteConnection() {
    const editId: number = this.editIdRef.nativeElement.value;
    const editMark = this.editMarkRef.nativeElement.value;
    const editModel = this.editModelRef.nativeElement.value;
    const editType = this.editTypeRef.nativeElement.value;
    const editedConnection2 = new Connection(editId, editMark, editModel, editType);

    this.connectionDeleted.emit(editedConnection2);
  }

  changeDeleteState(){
    this.deleteStateChanged.emit();
  }
}
