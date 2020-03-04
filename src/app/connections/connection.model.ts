export class Connection {

  public id: number;
  public employeeId: number;
  public deviceId: number;
  public conDate: Date;

  constructor(id: number, employeeId: number, deviceId: number, conDate: Date) {
    this.id = id;
    this.employeeId = employeeId;
    this.deviceId = deviceId;
    this.conDate = conDate;
  }
}