const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?api_key:${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key:${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: 'Action Movies',
    url: `/discover/movie?api_key:${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`,
  },
  fetchComedyMovies: {
    title: 'Comedy Movies',
    url: `/discover/movie?api_key:${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: 'Horror Movies',
    url: `/discover/movie?api_key:${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: 'Romance Movies',
    url: `/discover/movie?api_key:${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749`,
  },
  fetchDocumentaries: {
    title: 'Documentaries',
    url: `/discover/movie?api_key:${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99`,
  },
  fetchMystery: {
    title: 'Mystery',
    url: `/discover/movie?api_key:${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=9648`,
  },
  fetchSciFi: {
    title: 'Sci-Fi',
    url: `/discover/movie?api_key:${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878`,
  },
  fetchWestern: {
    title: 'Western',
    url: `/discover/movie?api_key:${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=37`,
  },
  fetchAnimation: {
    title: 'Animation',
    url: `/discover/movie?api_key:${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16`,
  },
  fetchTV: {
    title: 'TV',
    url: `/discover/movie?api_key:${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10770`,
  },
  // fetchTVAction: {
  //   title: 'TV Action',
  //   url: `/discover/movie?api_key:${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10759`,
  // },
  // fetchTVAdventure: {
  //   title: 'TV Adventure',
  //   url: `/discover/movie?api_key:${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10765`,
  // },
  // fetchTVComedy: {
  //   title: 'TV Comedy',
  //   url: `/discover/movie?api_key:${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749`,
  // },
  // fetchTVCrime: {
  //   title: 'TV Crime',
  //   url: `/discover/movie?api_key:${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80`,
  // },
  // fetchTVDrama: {
  //   title: 'TV Drama',
  //   url: `/discover/movie?api_key:${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18`,
  // },
  // fetchTVFamily: {
  //   title: 'TV Family',
  //   url: `/discover/movie?api_key:${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751`,
  // },
  // fetchTVFantasy: {
  //   title: 'TV Fantasy',
  //   url: `/discover/movie?api_key:${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14`,
  // },
  // fetchTVHistory: {
  //   title: 'TV History',
  //   url: `/discover/movie?api_key:${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=36`,
  // },
  // fetchTVHorror: {
  //   title: 'TV Horror',
  //   url: `/discover/movie?api_key:${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27`,
  // },
  // fetchTVMystery: {
  //   title: 'TV Mystery',
  //   url: `/discover/movie?api_key:${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=9648`,
  // },
  // fetchTVReality: {
  //   title: 'TV Reality',
  //   url: `/discover/movie?api_key:${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10764`,
  // },
  // fetchTVSciFi: {
  //   title: 'TV Sci-Fi',
  //   url: `/discover/movie?api_key:${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878`,
  // },
  // fetchTVSport: {
  //   title: 'TV Sport',
  //   url: `/discover/movie?api_key:${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99`,
  // },
  // fetchTVThriller: {
  //   title: 'TV Thriller',
  //   url: `/discover/movie?api_key:${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53`,
  // },
  // fetchTVWar: {
  //   title: 'TV War',
  //   url: `/discover/movie?api_key:${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10752`,
  // },
  // fetchTVWestern: {
  //   title: 'TV Western',
  //   url: `/discover/movie?api_key:${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=37`,
  // },
  // fetchTVDocumentary: {
  //   title: 'TV Documentary',
  //   url: `/discover/movie?api_key:${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99`,
  // },
  // fetchTVKids: {
  //   title: 'TV Kids',
  //   url: `/discover/movie?api_key:${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10762`,
  // },
  // fetchTVNews: {
  //   title: 'TV News',
  //   url: `/discover/movie?api_key:${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99`,
  // },
};
