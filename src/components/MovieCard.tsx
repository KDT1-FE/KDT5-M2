export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div
      className="relative w-[200px] h-[300px] overflow-hidden bg-white rounded-md hover:ring-8 ring-amber-400 transition-all duration-300 ease-in-out text-center text-sm font-bold cursor-pointer hover:scale-105"
      key={movie.imdbID}
    >
      <img
        src={
          movie.Poster === 'N/A' ? 'src/assets/defaultImg.jpg' : movie.Poster
        }
        alt={movie.Title}
        className="w-[200px] h-[300px] object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-black/40 flex items-center justify-center flex-col p-3">
        <p className="text-amber-400">{movie.Year}</p>
        <p className="w-full text-white line-clamp-1">{movie.Title}</p>
      </div>
    </div>
  );
}
