function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const song = {
  releaseStatus: 1,
  contentIdStatus: 1,
  averageScore: 9,
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
  totalDownload: 1000,
  totalPlay: 1000,
  dateUploaded: '13/01/2014',
  url: '/assets/songs/Sugar_Maroon_5.mp3',
};

const songList = Array.from({ length: randomNumber(20, 25) }, (_, i) => ({
  ...song,
  id: i,
  title: 'Sugar',
  user: 'Maroon 5',
  album: 'V',
  image: '/assets/images/avatar/A1.jpg',
}));

export default songList;
