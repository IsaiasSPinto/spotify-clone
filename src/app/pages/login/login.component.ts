import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.verifyAccessToken();
  }

  verifyAccessToken() {
    const token = this.spotifyService.getAccessToken();
    if (!!token) {
      this.spotifyService.setAccessToken(token);
    }
  }

  openLoginPage() {
    window.location.href = this.spotifyService.getLoginUrl();
  }
}
