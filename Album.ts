import { Artist } from "./Artist";
import { Song } from "./Song";

export class Album {
  private _title: string;
  private _artist: Artist;
  private _year: number;
  private _tracks: Song[] = [];

  constructor(titleOfAlbum: string, artist: Artist, year: number) {
    this._title = titleOfAlbum;
    this._artist = artist;
    this._year = year;
    this._tracks = [];
  }

  get title() {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get artist() {
    return this._artist;
  }

  set artist(artist: Artist) {
    this._artist = artist;
  }

  get year() {
    return this._year;
  }

  set year(year: number) {
    this._year = year;
  }

  get tracks() {
    return this._tracks;
  }

  set tracks(tracks: Song[]) {
    this._tracks = tracks;
  }

  addTrack(track: Song) {
    this._tracks.push(track);
  }
}
