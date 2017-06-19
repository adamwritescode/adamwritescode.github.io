var music = [],
music_paths = [
  'sound/music/song0.mp3',
  'sound/music/song1.mp3',
  'sound/music/song2.mp3'
],

music_metadata = [
  'Cooper-Moore - "(a) The Forest"',
  'Chan Wai Fat - "Dream instrumental"',
  'Lo Ka Ping - "Teals Descending Upon The Level Sand"'
];



// 01: Cooper-Moore_-_01_-_a_The_Forest
// 02: Chan_Wai_Fat_-_05_-_Dream_instrumental.mp3
// 03: Lo_Ka_Ping_-_01_-_Teals_Descending_Upon_The_Level_Sand.mp3

for (var i = 0; i < music_paths.length; i++){
  music[i] = new Audio();
  music[i].src = music_paths[i];
  music[i].metadata = music_metadata[i];
}
