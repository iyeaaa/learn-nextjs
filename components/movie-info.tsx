import { API_URL } from "../api/url";
import { IMovie } from "../types/movie";
import styles from "../styles/movie-info.module.css";

export async function getMovie(id: string): Promise<IMovie> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        className={styles.poster}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3 className={styles.voteAverage}>
          ⭐️ {movie.vote_average.toFixed(2)}
        </h3>
        <p className={styles.overview}>{movie.overview}</p>
        <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
