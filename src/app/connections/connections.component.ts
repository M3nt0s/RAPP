import { Component, OnInit, Output, Input } from "@angular/core";
import { Connection } from "./connection.model";

@Component({
  selector: "app-connections",
  templateUrl: "./connections.component.html",
  styleUrls: ["./connections.component.scss"]
})
export class ConnectionsComponent implements OnInit {
  connections: Connection[];
  SelectedConnection: Connection;
  autoincrement: number;

  constructor() {
    this.autoincrement = 1;
    this.connections = [];
  }

  ngOnInit(): void {
    this.storageFunction();
  }

  storageSave() {
    localStorage.setItem("connections", JSON.stringify(this.connections));
  }

  storageFunction() {
    var data = JSON.parse(localStorage.getItem("connections"));

    // localStorage.removeItem('employees');
    // localStorage.clear();

    // if (data === null) {
    // this.addConnection(new Connection(this.autoincrement, 'HP', '3550', 'Printer'));
    // this.addConnection(new Connection(this.autoincrement, 'Acer', 'Nitro N211453', 'Monitor'));
    // }

    if (!(data === null)) {
      for (var i = 0; i < data.length; i++) {

        if ((i) === (data.length - 1)) {
          this.autoincrement = +(data[data.length - 1].id);

          this.autoincrement++;
        }
        this.connections.push(data[i]);
      }
    }
  }

  addConnection(connection: Connection) {
    this.connections.push(connection);
    this.storageSave();
    this.autoincrement++;
  }

  editConnection(connection: Connection) {
    const index = this.connections.findIndex(x => {
      return x.id == connection.id;
    });
    this.connections[index] = connection;
    this.storageSave();
  }

  deleteConnection(connection: Connection) {

    const indexx = this.connections.findIndex(x => {
      return x.id == connection.id;
    });
    if (indexx > -1) {
      this.connections.splice(indexx, 1);
    }
    this.storageSave();
  }
}
