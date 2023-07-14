import React, { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import ResultList from "../../components/ResultList/ResultList";
import { API_KEY } from "../../components/RequestApi";
import Navbar from "../../components/Navbar/Navbar";
import classes from "./Search.module.css";
const Search = (props) => {
  const [resultMovies, setResultsMovie] = useState([]);
  const [valueSearch, setValueSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true); // hiển thị text loading khi đang chờ lấy dữ liệu từ database
  const [httpError, setHttpError] = useState();

  //Nhận dữ liệu khi submit
  const handlerSearch = (value) => {
    setValueSearch(value);
  };

  // Tìm kiếm theo dữ liệu từ người dùng
  const FetchApiSearch = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&include_adult=false&language=en-US&page=1&query=${valueSearch}`
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await response.json();

    // trả về thành công và lưu dữ liệu vào mảng
    setResultsMovie(data.results);

    setIsLoading(false);
  };

  useEffect(() => {
    FetchApiSearch().catch((err) => {
      setIsLoading(false);
      setHttpError(err.message);
    });
  }, [valueSearch]);

  //set loading khi đang chờ load dữ liệu từ sever
  if (isLoading) {
    return (
      <section className={classes.FilmsLoading}>
        <p>Loading....</p>
      </section>
    );
  }

  // Hiển thị lỗi thông báo khi lỗi api để lấy dữ liệu
  if (httpError) {
    return (
      <section className={classes.FilmsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <div>
      <Navbar />
      <SearchForm onHandlerSearch={handlerSearch} />
      <ResultList resultMovies={resultMovies} />
    </div>
  );
};

export default Search;
