import { Component, OnInit, Input, Output } from '@angular/core';
import { Connection } from '../connection.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-connection-manager',
  templateUrl: './connection-manager.component.html',
  styleUrls: ['./connection-manager.component.scss']
})
export class ConnectionManagerComponent implements OnInit {

  isEditing: boolean;
  isAdding: boolean;
  isDeleting: boolean;

  @Input() autoincrement: number;
  @Output() connectionAdded = new EventEmitter<Connection>();
  @Output() connectionWasEdited = new EventEmitter<Connection>();
  @Output() connectionWasDeleted = new EventEmitter<Connection>();

  @Input() con: Connection;


  constructor() {
    this.isAdding = false;
    this.isEditing = false;
    this.isDeleting = false;
  }

  ngOnInit(): void {
  }


  toolbarAdd() {
    this.isAdding = !this.isAdding;

    if(this.isAdding === true && (this.isEditing === true) || this.isDeleting === true){
      this.isEditing = false;
      this.isDeleting = false;
    }
  }

  toolbarEdit() {
     this.isEditing = !this.isEditing;

     if(this.isEditing === true && (this.isEditing === true) || this.isDeleting === true){
      this.isDeleting = false;
      this.isAdding = false;
    }
  }

  toolbarDelete() {
    this.isDeleting = !this.isDeleting;

    if(this.isDeleting === true && (this.isEditing === true) || this.isAdding === true){
      this.isEditing = false;
      this.isAdding = false;
    }
  }

  onConnectionAdd(connection: Connection) {
    this.connectionAdded.emit(connection);
  }

  editedConnection(connection: Connection) {
    this.connectionWasEdited.emit(connection);
  }

  deletedConnection(connection: Connection) {
    this.connectionWasDeleted.emit(connection);
  }
}
