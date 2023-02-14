import { IImportable } from "./interface";
import { Play } from "./Play";
import { Song } from "./Song";
import { Album } from "./Album";

export class LocalImporter implements IImportable {
  private _filePath: string;

  constructor(path: string) {
    this._filePath = path;
  }

  loadPlaylist(): any {
    const loadedPlaylist = require(`./${this._filePath}`);
    console.log(`Your playlist at location ${this._filePath} will be loaded`);
    console.log(loadedPlaylist);
    const p1 = new Play("Local Playlist");
  }
}

const local = new LocalImporter("playlist.json");
local.loadPlaylist();
