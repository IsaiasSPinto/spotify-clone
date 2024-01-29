import { Component } from '@angular/core';
import { LeftSidebarComponent } from '../../components/left-sidebar/left-sidebar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [LeftSidebarComponent, RouterModule, HomeComponent],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent {}
