import { IPlaylist } from '../interfaces/IPlaylist';
import { IUser } from '../interfaces/IUser';

export function SpotifyUserMapToIUser(
  user: SpotifyApi.CurrentUsersProfileResponse
): IUser {
  return {
    id: user.id,
    name: user.display_name,
    imageUrl: user.images.length > 0 ? user.images.pop().url : '',
  };
}

export function SpotifyPlaylistMapToIPlaylist(
  playlist: SpotifyApi.PlaylistObjectSimplified
): IPlaylist {
  return {
    id: playlist.id,
    name: playlist.name,
    imageUrl: playlist.images.length > 0 ? playlist.images.pop().url : '',
  };
}
