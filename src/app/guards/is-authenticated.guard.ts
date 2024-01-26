import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const spotifyService = inject(SpotifyService);

  const token = localStorage.getItem('token');

  if (!token) {
    localStorage.clear();
    router.navigate(['/login']);
    return false;
  }

  return new Promise(async (res) => {
    const result = await spotifyService.initUser();

    if (!result) {
      localStorage.clear();
      router.navigate(['/login']);
      res(false);
    }

    res(result);
  });
};

function naoAutenticado() {
  const router = inject(Router);
  localStorage.clear();
  router.navigate(['/login']);
  return false;
}
