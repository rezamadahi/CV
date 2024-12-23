import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../header/header.component";

import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    DividerModule,
    ButtonModule,
    CardModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
