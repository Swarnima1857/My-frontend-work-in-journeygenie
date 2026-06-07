import { IoMusicalNotes } from "react-icons/io5";
function SongCard({ song }) {
  if (!song) return null;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm h-[260px]">

      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <IoMusicalNotes className="text-3xl text-violet-600" />
        Top Song
      </h2>

      <p className="text-3xl font-bold">
        {song.name}
      </p>

      <p className="mt-4 text-gray-500">
        Artist: {song.artist}
      </p>

      <p className="mt-2">
        Album: {song.album}
      </p>

    </div>
  );
}

export default SongCard;