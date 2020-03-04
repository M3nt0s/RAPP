import { Component, OnInit, Input } from '@angular/core';
import { Connection } from '../connection.model';


@Component({
  selector: 'app-connection-detail',
  templateUrl: './connection-detail.component.html',
  styleUrls: ['./connection-detail.component.scss']
})
export class ConnectionDetailComponent implements OnInit {

  title = 'Connections Details.';
  @Input() con: Connection;

  constructor() {
  }

  ngOnInit(): void {
  }
}
