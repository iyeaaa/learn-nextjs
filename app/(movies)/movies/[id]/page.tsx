export default async function MovieDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;   // await 필요!
  console.log(id);

  return (
    <div>
      <h1>Movie {id}</h1>
    </div>
  );
}
