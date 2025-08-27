import Link from "next/link";
import { IMovie } from "../types/movie";
import styles from "../styles/movie.module.css";

export default function Movie({
  title,
  id,
  poster_path,
}: {
  title: string;
  id: number;
  poster_path: string;
}) {
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
