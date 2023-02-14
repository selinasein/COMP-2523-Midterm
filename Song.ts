export class Song {
  private _title: string;

  constructor(title: string) {
    this._title = title;
  }

  get song() {
    return this._title;
  }

  set song(title: string) {
    this._title = title;
  }
}
