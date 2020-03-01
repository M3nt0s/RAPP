import { Component, OnInit, Input, Output, ElementRef, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Connection } from '../connection.model';


@Component({
  selector: 'app-connection-add',
  templateUrl: './connection-add.component.html',
  styleUrls: ['./connection-add.component.scss']
})
export class ConnectionAddComponent implements OnInit {

  @Input() con: Connection;
  SelectedConnection: Connection;
  @Input() autoincrement: number;
  
  @Output() addStateChanged = new EventEmitter<undefined>();

  @ViewChild('markInput') markInputRef: ElementRef;
  @ViewChild('modelInput') modelInputRef: ElementRef;
  @ViewChild('typeInput') typeInputRef: ElementRef;
  @Output() connectionAdded = new EventEmitter<Connection>();

  constructor() {
  }

  ngOnInit(): void {
  }


  onAddConnection() {
    const conMark = this.markInputRef.nativeElement.value;
    const conModel = this.modelInputRef.nativeElement.value;
    const conType = this.typeInputRef.nativeElement.value;
    const newConnection = new Connection(this.autoincrement, conMark, conModel, conType);
    this.connectionAdded.emit(newConnection);
  }

  changeAddState(){
    
    this.addStateChanged.emit();
  }

}
