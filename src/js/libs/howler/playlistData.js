////////////////////////////////////////////////////
// this function holds the playlist data!
const getPlaylistData = () => {

  // data array
  const data = [

    // Kristoffer Ørum
    {
      title: 'A conversation with Kristoffer Ørum',
      contributor: "Anders Visti",
      thumb: "KØrum.jpg",
      file: 'PCDcast_Kristoffer',
      desc: "Nulla nec tristique nisl. Sed rhoncus, turpis sit amet accumsan varius, augue eros mattis tellus, vel rutrum arcu nibh eget nisl.",
      duration: "32:00",
      rss: "rssfeed",
      howl: null
    },

    // Dorothy Santos
    {
      title: 'Dorothy Santos',
      contributor: "Winnie Soon",
      thumb: "DSantos.jpg",
      file: 'Heidi_SanktNicolausGade6',
      desc: "Nulla nec tristique nisl. Sed rhoncus, turpis sit amet accumsan varius, augue eros mattis tellus, vel rutrum arcu nibh eget nisl.",
      duration: "30:00",
      rss: "rssfeed",
      howl: null
    },

  ];

  return data;
};

export {
  getPlaylistData
}