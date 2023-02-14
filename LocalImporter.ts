import { IImportable } from "./interface";
import { Play } from "./Play";
import { Song } from "./Song";
import { Album } from "./Album";
import { Artist } from "./Artist";

export class LocalImporter implements IImportable {
  private _filePath: string;

  constructor(path: string) {
    this._filePath = path;
  }

  loadPlaylist(): Play {
    const loadedPlaylist = require(`./${this._filePath}`);
    console.log(`Your playlist at location ${this._filePath} will be loaded`);
    const albumsArr = loadedPlaylist.albums;
    const p1 = new Play("Local Playlist");
    albumsArr.forEach((album: any) => {
      const myAlbum = new Album(album.name, new Artist("Adele"), 2001);
      album.tracks.forEach((track: any) => myAlbum.addTrack(track));
      p1.addAlbum(myAlbum);
    });
    return p1;
  }
}

const local = new LocalImporter("playlist.json");
local.loadPlaylist();
