const initialState = {
  games: [
    {
      id: 1,
      title: 'The Legend of Zelda: Breath of the Wild',
      image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/mievpzb9rbzzenmznvnr.jpg',
      timeToBeat: 46.5,
      dateAdded: 1541868941707,
      dateCompleted: 0,
    },
    {
      id: 2,
      title: 'Red Dead Redemption 2',
      image: 'https://howlongtobeat.com/gameimages/27100_Red_Dead_Redemption_2.png',
      timeToBeat: 40,
      dateAdded: 1541868941100,
      dateCompleted: 0,
    },
    {
      id: 3,
      title: 'Undertale',
      image: 'https://howlongtobeat.com/gameimages/Undertale_header.jpg',
      timeToBeat: 6.5,
      dateAdded: 1541868941301,
      dateCompleted: 1541868941769,
    },
    {
      id: 4,
      title: 'Just Dance 2018',
      image: 'https://howlongtobeat.com/gameimages/50164_Just_Dance_2018.jpg',
      timeToBeat: 11,
      dateAdded: 1541873631507,
      dateCompleted: 0,
    },
    {
      id: 5,
      title: 'Kirby\'s Adventure',
      image: 'https://howlongtobeat.com/gameimages/250px-Kirbys_Adventure_Coverart.png',
      timeToBeat: 3.5,
      dateAdded: 1541873750004,
      dateCompleted: 0,
    },
  ],
  profile: {
    userName: 'Ben',
    completionType: 'MAIN', // MAIN, EXTRA or COMPLETE
    orderBy: 'DATE', // DATE, TIME or TITLE
  }
}

export default initialState;