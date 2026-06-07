function SearchBar({ search, setSearch, handleSearch }) {
  return (
    <div className="bg-white rounded-2xl p-3 shadow-sm flex gap-3">

      <input
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          flex-1
          px-4
          py-3
          outline-none
          text-lg
        "
      />

      <button
        onClick={handleSearch}
        className="
          bg-violet-600
          hover:bg-violet-700
          text-white
          px-6
          rounded-xl
          transition
        "
      >
        Search
      </button>

    </div>
  );
}

export default SearchBar;