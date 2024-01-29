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
import { UserFooterComponent } from '../userFooter/userFooter.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [
    MenuButtonComponent,
    FontAwesomeModule,
    CommonModule,
    UserFooterComponent,
  ],
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

  constructor(private router: Router, private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.getPlaylists();
  }

  onMenuButtonClick(button: string) {
    this.selectedButton = button;
    this.router.navigateByUrl(`/player/${button.toLowerCase()}`);
  }

  async getPlaylists() {
    this.playlists = await this.spotifyService.getPlaylists();
  }
}
