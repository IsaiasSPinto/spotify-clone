import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { IUser } from '../../interfaces/IUser';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-user-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './userFooter.component.html',
  styleUrl: './userFooter.component.scss',
})
export class UserFooterComponent implements OnInit {
  logoutIcon = faSignOut;
  usuario: IUser = null;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {
    this.usuario = this.spotifyService.user;
  }

  logout() {
    this.spotifyService.logout();
  }
}
