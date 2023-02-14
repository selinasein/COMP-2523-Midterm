// A PlaylistImporter takes in its constructor an importer of type Importable.

import { IImportable } from "./interface";
import { Play } from "./Play";

// A PlaylistImporter has an importPlaylist method that calls a loadPlaylist
// method from the importer. EVERY IMPORTER must have this method.

export class PlaylistImporter {
  private _importer: IImportable;

  constructor(importer: IImportable) {
    this._importer = importer;
  }

  importPlayList(): Play {
    return this._importer.loadPlaylist();
  }
}
