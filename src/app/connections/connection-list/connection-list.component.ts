import { Component, OnInit, Output, Input } from "@angular/core";
import { Connection } from "../connection.model";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-connection-list",
  templateUrl: "./connection-list.component.html",
  styleUrls: ["./connection-list.component.scss"]
})
export class ConnectionListComponent implements OnInit {
  title: string;


  @Output() ConnectionWasSelected = new EventEmitter<Connection>();
  @Input() connections: Connection[];

  SelectedConnection: Connection;

  constructor() {
    this.title = "Connection List";
  }

  ngOnInit(): void {
  }

  selectedItem(con: Connection) {
    this.ConnectionWasSelected.emit(con);
  }
}
