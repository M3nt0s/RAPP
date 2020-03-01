export class Device {

  public id: number;
  public mark: string;
  public model: string;
  public type: string;

  constructor(id: number, mark: string, model: string, type: string) {
    this.id = id;
    this.mark = mark;
    this.model = model;
    this.type = type;
  }
}