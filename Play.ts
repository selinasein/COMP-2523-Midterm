import { Album } from "./Album";
import { Artist } from "./Artist";
import { Song } from "./Song";

export class Play {
  private _name: string;
  private _listOfSongs: Song[];

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get listofSongs() {
    return this._listOfSongs;
  }

  set listofSongs(song: Song[]) {
    this._listOfSongs = song;
  }

  addAlbum(album: Album) {
    let addAlbum = [];
    const allSongs = album.tracks;
    addAlbum.push(allSongs);
    addAlbum.push(this._listOfSongs);
    console.log(addAlbum);
  }
}

const song1 = new Song("Song 1");
const song2 = new Song("Song 2");
// const song3 = new Song("Song 3");
// const song4 = new Song("Song 4");
// const song5 = new Song("Song 5");
// const song6 = new Song("Song 6");
// const song7 = new Song("Song 7");
// const song8 = new Song("Song 8");
// const song9 = new Song("Song 9");
// const song10 = new Song("Song 10");

// const artist1 = new Artist("Artist 1");
// const artist2 = new Artist("Artist 2");
// const album1 = new Album("Album 1", artist1, 2023);
// album1.tracks = [song5, song6];
// const album2 = new Album("Album 2", artist2, 2023);
// album2.tracks = [song3, song4];

// // console.log(album1.tracks);

// const playlist1 = new Play("fun song");

// playlist1.listofSongs = [song1, song2];

// console.log("Playlist.listofSongs print:");
// console.log(playlist1.listofSongs);
// console.log("--------------------------");
// console.log("should add song5, song 6 below:");
// playlist1.addAlbum(album1); //added song5, song 6
// console.log("--------------------------");
// console.log("should add song3, song 4 below:");
// playlist1.addAlbum(album2); //added song 3, song 4
// console.log("--------------------------");
