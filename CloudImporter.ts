import { Album } from "./Album";
import { Artist } from "./Artist";
import { IImportable } from "./interface";
import { Play } from "./Play";

export class CloudImporter implements IImportable {
  private _urlPath: string;

  constructor(url: string) {
    this._urlPath = url;
  }

  loadPlaylist(): Play {
    console.log(`Importing playlist from ${this._urlPath}`);
    let p1 = new Play("youtube playlist");
    let artist = new Artist("someone");
    let album = new Album("something", artist, 2212);
    p1.addAlbum(album);
    return p1;
  }
}

const cloud = new CloudImporter("youtube.com/something");
console.log(cloud.loadPlaylist());
