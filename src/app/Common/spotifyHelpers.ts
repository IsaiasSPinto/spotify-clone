import { IUser } from '../interfaces/IUser';

export function SpotifyUserMapToIUser(
  user: SpotifyApi.CurrentUsersProfileResponse
): IUser {
  return {
    id: user.id,
    name: user.display_name,
    imageUrl: user.images.pop().url,
  };
}
