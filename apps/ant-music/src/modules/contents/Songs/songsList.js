function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const song = {
  release_status: 1,
  contentID_status: 1,
  average_score: 9,
  public: 1,
  phase: 1,
  genres: [
    {
      id: 1,
      name: 'Pop',
    },
    {
      id: 2,
      name: 'Rock',
    },
  ],
  count_download: 1000,
  count_view: 1000,
  upload_date: '13/01/2014',
  mp3_url: '/assets/songs/Sugar_Maroon_5.mp3',
  mp4_url: '/assets/songs/Sugar_Maroon_5.mp3',
  spotify_url: '',
};

const songList = Array.from({ length: randomNumber(20, 25) }, (_, i) => ({
  ...song,
  id: i,
  name: 'Sugar',
  user: 'Maroon 5',
  album: 'V',
  thumbnail_url: '/assets/images/avatar/A1.jpg',
  note: 'Bài hát của maroon 5',
}));

export default songList;
