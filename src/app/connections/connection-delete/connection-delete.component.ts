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

  @ViewChild('delId') delIdRef: ElementRef;
  @ViewChild('delMark') delMarkRef: ElementRef;
  @ViewChild('delModel') delModelRef: ElementRef;
  @ViewChild('delDate') delDataRef: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }


  onDeleteConnection() {
    const delId: number = this.delIdRef.nativeElement.value;
    const delMark: number = this.delMarkRef.nativeElement.value;
    const delModel: number = this.delModelRef.nativeElement.value;
    const delDate: Date = this.delDataRef.nativeElement.value;

    const deleteddConnection2 = new Connection(delId, delMark, delModel, delDate);

    this.connectionDeleted.emit(deleteddConnection2);
  }

  changeDeleteState() {
    this.deleteStateChanged.emit();
  }
}
