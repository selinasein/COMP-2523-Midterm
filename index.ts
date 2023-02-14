import { Artist } from "./Artist"; //👍
import { User } from "./User";
import { Song } from "./Song"; //👍
import { Album } from "./Album"; //👍
import { Play } from "./Play"; //👍
import { LocalImporter } from "./LocalImporter";
import { CloudImporter } from "./CloudImporter";
import { PlaylistImporter } from "./PlaylistImporter";

let artist = new Artist("Muse");
let album = new Album("The 2nd Law", artist, 2012);
let song = new Song("Madness");
album.addTrack(song);

let playlist = new Play("Fun songs");
playlist.addAlbum(album);

let localPlaylistImporter = new PlaylistImporter(
  new LocalImporter("playlist.json")
);

let cloudPlaylistImporter = new PlaylistImporter(
  new CloudImporter("www.youtube.com")
);

let localPlaylist = localPlaylistImporter.importPlayList();
let cloudPlaylist = cloudPlaylistImporter.importPlayList();

let user = new User("john123", "password123");
user.addAlbum(album);

user.addPlaylist(playlist);
user.addPlaylist(localPlaylist);
user.addPlaylist(cloudPlaylist);

console.log("Getting Playlist...");
console.log(user.playlist);

console.log("Getting Albums...");
console.log(user.getAlbums());

console.log("Getting Songs...");
user.getSongs()?.forEach((songObj: Song) => {
  console.log(songObj.title);
});
