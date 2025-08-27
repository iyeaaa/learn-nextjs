import Link from "next/link";
import { IMovie } from "../../types/movie";
import { Metadata } from "next";
import { API_URL } from "../../api/url";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

export const metadata: Metadata = {
  title: "Home",
};

async function getMovies(): Promise<IMovie[]> {
  // await new Promise(resolve => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function Page() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
