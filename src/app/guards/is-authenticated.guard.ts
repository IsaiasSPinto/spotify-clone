import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const spotifyService = inject(SpotifyService);

  const token = localStorage.getItem('token');

  if (!token) {
    naoAutenticado();
  }

  return new Promise((res) => {
    const result = spotifyService.initUser();

    if (!result) {
      res(naoAutenticado());
    }

    router.navigate(['/player']);
    res(result);
  });
};

function naoAutenticado() {
  const router = inject(Router);
  localStorage.clear();
  router.navigate(['/login']);
  return false;
}
