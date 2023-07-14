import React, { createContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import MovieList from "../../components/MovieList/MovieList";
import { Apis } from "../../components/RequestApi";
import classes from "./Browse.module.css";
import Banner from "../../components/Banner/Banner";
export const ImgInformationContext = createContext();

function Browse(props) {
  // import Apis và gọi hàm để lấy về các mảng api tương ứng với từng APi
  const {
    trendDings,
    netflixOriginals,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  } = Apis();

  return (
    <div className="app">
      {/* Phần Navbar */}
      <Navbar />

      {/* Phần Banner */}
      <Banner />

      {/* Phần List danh sách phim theo từng mục */}

      {/*danh sách phim netflixOriginals */}
      <section className={classes.container}>
        <span className={classes.title}></span>
        <MovieList movies={netflixOriginals} />
      </section>

      {/*danh sách phim Xu hướng */}
      <section className={classes.container}>
        <span className={classes.title}>Xu Hướng</span>
        <MovieList movies={trendDings} />
      </section>

      {/*danh sách phim Xếp hạng cao */}
      <section className={classes.container}>
        <span className={classes.title}>Xếp hạng cao</span>
        <MovieList movies={topRated} />
      </section>

      {/*danh sách phim Hành động */}
      <section className={classes.container}>
        <span className={classes.title}>Hành động</span>
        <MovieList movies={actionMovies} />
      </section>

      {/*danh sách phim Hài */}
      <section className={classes.container}>
        <span className={classes.title}>Hài</span>
        <MovieList movies={comedyMovies} />
      </section>

      {/*danh sách phim kinh Dị */}
      <section className={classes.container}>
        <span className={classes.title}>kinh Dị</span>
        <MovieList movies={horrorMovies} />
      </section>

      {/*danh sách phim Lãng mạn */}
      <section className={classes.container}>
        <span className={classes.title}>Lãng mạn</span>
        <MovieList movies={romanceMovies} />
      </section>

      {/*danh sách phim Tài liệu */}
      <section className={classes.container}>
        <span className={classes.title}>Tài liệu</span>
        <MovieList movies={documentaries} />
      </section>
    </div>
  );
}

export default Browse;
