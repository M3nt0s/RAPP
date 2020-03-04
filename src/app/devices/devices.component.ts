import { Component, OnInit, Output, Input } from "@angular/core";
import { Device } from "./device.model";

@Component({
  selector: "app-devices",
  templateUrl: "./devices.component.html",
  styleUrls: ["./devices.component.scss"]
})
export class DevicesComponent implements OnInit {
  devices: Device[];
  SelectedDevice: Device;
  autoincrement: number;

  constructor() {
    this.autoincrement = 1;
    this.devices = [];
  }

  ngOnInit(): void {
    this.storageFunction();
  }

  storageSave() {
    localStorage.setItem("devices", JSON.stringify(this.devices));
  }

  storageFunction() {
    var data = JSON.parse(localStorage.getItem("devices"));

    // localStorage.removeItem('employees');
    // localStorage.clear();

    // if (data === null) {
    // this.addDevice(new Device(this.autoincrement, 'HP', '3550', 'Printer'));
    // this.addDevice(new Device(this.autoincrement, 'Acer', 'Nitro N211453', 'Monitor'));
    // }

    if (!(data === null)) {
      for (var i = 0; i < data.length; i++) {
        if (i === data.length - 1) {
          this.autoincrement = +data[data.length - 1].id;
          this.autoincrement++;
        }
        this.devices.push(data[i]);
      }
    }
  }

  addDevice(device: Device) {
    this.devices.push(device);
    this.storageSave();
    this.autoincrement++;
  }

  editDevice(device: Device) {
    const index = this.devices.findIndex(x => {
      return x.id == device.id;
    });
    this.devices[index] = device;
    this.storageSave();
  }

  deleteDevice(device: Device) {
    const indexx = this.devices.findIndex(x => {
      return x.id == device.id;
    });
    if (indexx > -1) {
      this.devices.splice(indexx, 1);
    }
    this.storageSave();
  }
}
