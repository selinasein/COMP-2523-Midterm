import { Play } from "./Play";
import { Album } from "./Album";

export class User {
  private _username: string;
  private _password: string;
  private _playlist: Play[] = [];
  private _album: Album[] = [];

  constructor(username: string, password: string) {
    this._username = username;
    this._password = password;
  }

  get username() {
    return this._username;
  }

  set username(user: string) {
    this._username = user;
  }

  get password() {
    return this._password;
  }

  set password(password: string) {
    this._password = password;
  }

  get playlist() {
    return this._playlist;
  }

  set playlist(playlist: Play[]) {
    this._playlist = playlist;
  }

  addPlaylist(playlist: Play) {
    this._playlist.push(playlist);
  }

  getAlbums() {
    return this._album;
  }

  // set album(album: Album[]) {
  //   this._album = album;
  // }

  addAlbum(album: Album) {
    this._album.push(album);
  }

  getSongs() {
    for (const album of this._album) {
      const track = album.tracks;
      return track;
    }
  }
}
