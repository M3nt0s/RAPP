import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.scss']
})
export class LeftbarComponent implements OnInit {

  constructor() { }


  items: MenuItem[];

  activeItem: MenuItem;

  ngOnInit() {
    this.items = [
      { label: 'Employees', routerLink: 'Employees' },
      { label: 'Devices', routerLink: 'Devices' },
      { label: 'Connections', routerLink: 'Connections' },
      { label: 'Viewer', routerLink: 'Viewer' }
    ];
    this.activeItem = this.items[0];
  }
}