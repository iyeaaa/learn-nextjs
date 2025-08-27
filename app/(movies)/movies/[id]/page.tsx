import Image from "next/image";
import { IMovie } from "../../../../types/movie";
import { Suspense } from "react";
import MovieVideos from "../../../../components/movie-videos";
import MovieInfo from "../../../../components/movie-info";
import { getMovie } from "../../../../components/movie-info";

interface MovieDetailProps {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: MovieDetailProps) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params: { id } }: MovieDetailProps) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
