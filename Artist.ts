import { Album } from "./Album";

export class Artist {
  private _name: string;
  private _albums: Album[];

  constructor(artistName: string) {
    this._name = artistName;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get album() {
    return this._albums;
  }

  set album(album: Album[]) {
    this._albums = album;
  }

  addAlbum(album: Album) {
    this._albums.push(album);
  }

}
