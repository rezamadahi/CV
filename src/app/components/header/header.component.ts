import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
      ButtonModule,
      CommonModule,
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isDarkMode: boolean = false;
  constructor() {
  }

  ngOnInit() {
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('my-app-dark');
    this.isDarkMode = element?.classList.contains('my-app-dark') ?? false;
  }

}
