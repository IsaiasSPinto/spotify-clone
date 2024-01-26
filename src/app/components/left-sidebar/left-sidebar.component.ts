import { Component } from '@angular/core';
import { MenuButtonComponent } from '../menu-button/menu-button.component';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [MenuButtonComponent],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss',
})
export class LeftSidebarComponent {}
