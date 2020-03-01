export class Connection {

    public id: number;
    public employeeId: number;
    public deviceId: number;
    
    constructor(id: number, employeeId: number, deviceId: number) {
      this.id = id;
      this.employeeId = employeeId;
      this.deviceId = deviceId;
    }
  }