import { Component, OnInit, Input, Output } from '@angular/core';
import { Connection } from '../../connection.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-connection-item',
  templateUrl: './connection-item.component.html',
  styleUrls: ['./connection-item.component.scss']
})
export class ConnectionItemComponent implements OnInit {

  @Input() con: Connection;
  @Output() ConnectionSelected = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }

  SelectedConnection() {
    this.ConnectionSelected.emit();
  }



}
