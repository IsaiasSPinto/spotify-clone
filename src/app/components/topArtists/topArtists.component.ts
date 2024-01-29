import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { IArtist } from '../../interfaces/IArtits';
import { newArtist } from '../../Common/factories';

@Component({
  selector: 'app-top-artists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topArtists.component.html',
  styleUrl: './topArtists.component.scss',
})
export class TopArtistsComponent implements OnInit {
  artist: IArtist = newArtist();

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.getTopArtists();
  }

  async getTopArtists() {
    const topArtists = await this.spotifyService.getTopArtists(1);

    if (!!topArtists) {
      this.artist = topArtists.pop();
    }
  }
}
