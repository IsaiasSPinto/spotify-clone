import { Injectable } from '@angular/core';
import { spotifyConfiguration } from '../../environments/environment';
import Spotify from 'spotify-web-api-js';
import { IUser } from '../interfaces/IUser';
import { SpotifyUserMapToIUser } from '../Common/spotifyHelpers';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  spotifyApi: Spotify.SpotifyWebApiJs;
  user: IUser;

  constructor() {
    this.spotifyApi = new Spotify();
  }

  async initUser() {
    debugger;
    if (!!this.user) return true;

    const token = localStorage.getItem('token');

    if (!token) return false;

    try {
      this.spotifyApi.setAccessToken(token);
      await this.getUser();

      return !!this.user;
    } catch (error) {
      return false;
    }
  }

  async getUser() {
    const user = await this.spotifyApi.getMe();
    console.log(user);
    this.user = SpotifyUserMapToIUser(user);
  }

  getLoginUrl() {
    const authEndpoint = `${spotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${spotifyConfiguration.clientId}&`;
    const redirectUri = `redirect_uri=${spotifyConfiguration.redirectUri}&`;
    const scopes = `scope=${spotifyConfiguration.scopes.join('%20')}&`;
    const responseType = 'response_type=token&show_dialog=true';

    return `${authEndpoint}${clientId}${redirectUri}${scopes}${responseType}`;
  }

  getAccessToken() {
    if (!window.location.hash) {
      return '';
    }

    const params = window.location.hash.substring(1).split('&');

    return params[0].split('=')[1];
  }

  setAccessToken(token: string) {
    localStorage.setItem('token', token);
    this.spotifyApi.setAccessToken(token);
  }
}
