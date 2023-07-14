import React, { useEffect, useState } from "react";
import classes from "./Banner.module.css";
import { requests } from "../RequestApi";

const Banner = (props) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // hiển thị text loading khi đang chờ lấy dữ liệu từ database
  const [httpError, setHttpError] = useState();

  // get danh sách phim từ fetchNetflixOriginals
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${requests.fetchNetflixOriginals}`
      );

      if (!response.ok) {
        throw new Error("Lỗi lấy dữ liệu từ Sever");
      }
      const dataMovies = await response.json();

      //kết quả trả về từ api gọi thành công
      let results = dataMovies.results;

      //lọc mảng mới kiểm tra xem các phần tử có thuộc tính backdrop_path hay không
      const imgs = results.filter((item) => item.backdrop_path !== null);
      //ramdom 1 ảnh để hiển thị trên phần banner
      const img = imgs[Math.floor(Math.random() * imgs.length)];
      //set lại vào mảng để render ra giao diện
      setMovies(img);
      setIsLoading(false);
    };

    fetchMovies().catch((err) => {
      setIsLoading(false);
      setHttpError(err.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.FilmsLoading}>
        <p>Loading....</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.FilmsError}>
        <p>{httpError}</p>
      </section>
    );
  }
  return (
    <section className={classes.content}>
      <img
        className={classes.navBarImg}
        src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`}
        alt="films"
      />
      <div className={classes.information}>
        <h1 className={classes.textMovie}>{movies.name}</h1>
        <section className={classes.listBtn}>
          <button className={classes.btnPlay}>Play</button>
          <button className={classes.btnList}>My List</button>
        </section>
        <p>{movies.overview}</p>
      </div>
    </section>
  );
};

export default Banner;
