import { Component } from '@angular/core';
import { LeftSidebarComponent } from '../../components/left-sidebar/left-sidebar.component';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [LeftSidebarComponent],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent {}
