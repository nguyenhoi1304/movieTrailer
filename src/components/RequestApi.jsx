import { useEffect, useState } from "react";

export const API_KEY = "9c1861230a76a1861f77f93cb0cacc9a";

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
};

export const Apis = () => {
  const [trendDings, setTrendDings] = useState([]);
  const [netflixOriginals, setNetflixOriginals] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [documentaries, setDocumentaries] = useState([]);

  //Fetch api fetchNetflixOriginals:Original
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${requests.fetchNetflixOriginals}`
      );
      const dataMoviesNetflixOriginals = await response.json();
      setNetflixOriginals(dataMoviesNetflixOriginals.results);
    };

    fetchMovies();
  }, []);

  //Fetch api fetchTrending:Xu hướng
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${requests.fetchTrending}`
      );
      const dataMovies = await response.json();
      setTrendDings(dataMovies.results);
    };

    fetchMovies();
  }, []);

  //Fetch api fetchTopRated:Xếp hạng cao
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${requests.fetchTopRated}`
      );
      const dataMovies = await response.json();
      setTopRated(dataMovies.results);
    };

    fetchMovies();
  }, []);

  //Fetch api fetchActionMovies:Hành động
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${requests.fetchActionMovies}`
      );
      const dataMovies = await response.json();
      setActionMovies(dataMovies.results);
    };

    fetchMovies();
  }, []);

  //Fetch api fetchComedyMovies:Hài
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${requests.fetchComedyMovies}`
      );
      const dataMovies = await response.json();
      setComedyMovies(dataMovies.results);
    };

    fetchMovies();
  }, []);

  //Fetch api fetchHorrorMovies: Kinh dị
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${requests.fetchHorrorMovies}`
      );
      const dataMovies = await response.json();
      setHorrorMovies(dataMovies.results);
    };

    fetchMovies();
  }, []);

  //Fetch api fetchRomanceMovies: lãng mạn
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${requests.fetchRomanceMovies}`
      );
      const dataMovies = await response.json();
      setRomanceMovies(dataMovies.results);
    };

    fetchMovies();
  }, []);

  //Fetch api fetchDocumentaries: tài liệu
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${requests.fetchDocumentaries}`
      );
      const dataMovies = await response.json();
      setDocumentaries(dataMovies.results);
    };

    fetchMovies();
  }, []);

  // trả về các hàm chứa các Api được lấy từ sever
  return {
    trendDings,
    netflixOriginals,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  };
};
