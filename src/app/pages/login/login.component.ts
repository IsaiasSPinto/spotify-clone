import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(private spotifyService: SpotifyService, private router: Router) {}

  ngOnInit(): void {
    this.verifyAccessToken();
  }

  verifyAccessToken() {
    const token = this.spotifyService.getAccessToken();
    if (!!token) {
      this.spotifyService.setAccessToken(token);
      this.router.navigate(['/player/home']);
    }
  }

  openLoginPage() {
    window.location.href = this.spotifyService.getLoginUrl();
  }
}
