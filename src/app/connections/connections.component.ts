import { Component, OnInit, Output, Input } from "@angular/core";
import { Connection } from "./connection.model";
import { Device } from "../devices/device.model";


@Component({
  selector: "app-connections",
  templateUrl: "./connections.component.html",
  styleUrls: ["./connections.component.scss"]
})
export class ConnectionsComponent implements OnInit {
  connections: Connection[];
  devices: Device[];
  SelectedConnection: Connection;
  autoincrement: number;

  constructor() {
    this.autoincrement = 1;
    this.connections = [];
    // this.addConnection(new Connection(this.autoincrement, 'HP', '3550', 'Printer'));
    // this.addConnection(new Connection(this.autoincrement, 'Acer', 'Nitro N211453', 'Monitor'));
  }

  ngOnInit(): void { 

  }

  addConnection(connection: Connection) {
    this.connections.push(connection);
    this.autoincrement++;
  }

  editConnection(connection: Connection) {
    const index = this.connections.findIndex(x => {
      return x.id == connection.id;
    });
    console.log(connection.id);
    this.connections[index] = connection;
  }

  deleteConnection(connection: Connection) {

    const indexx = this.connections.findIndex(x => {
      return x.id == connection.id;
    });
    if (indexx > -1) {
      this.connections.splice(indexx, 1);
    }
  }
}
