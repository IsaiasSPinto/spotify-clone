import { Component, OnInit } from '@angular/core';
import { MenuButtonComponent } from '../menu-button/menu-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHome,
  faList,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { IPlaylist } from '../../interfaces/IPlaylist';
import { SpotifyService } from '../../services/spotify.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [MenuButtonComponent, FontAwesomeModule, CommonModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss',
})
export class LeftSidebarComponent implements OnInit {
  selectedButton = 'Home';

  playlists: IPlaylist[] = [];

  homeIcon = faHome;
  searchIcon = faSearch;
  artistIcon = faUser;
  playlistIcon = faList;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.getPlaylists();
  }

  onMenuButtonClick(button: string) {
    this.selectedButton = button;
  }

  async getPlaylists() {
    this.playlists = await this.spotifyService.getPlaylists();
  }
}
