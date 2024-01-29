import { Component } from '@angular/core';
import { TopArtistsComponent } from '../../components/topArtists/topArtists.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopArtistsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
