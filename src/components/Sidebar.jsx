function Sidebar() {
  return (
    <div
      className="
        h-screen
        bg-white
        shadow-md
        p-6
        flex
        flex-col
      "
    >
      <h1 className="text-3xl font-bold text-violet-600">
        JourneyGenie
      </h1>

      <p className="text-gray-500 mt-2">
        Explore. Discover. Get Inspired.
      </p>

      <div className="mt-10 space-y-4">

        <button className="w-full text-left px-4 py-3 rounded-xl bg-violet-600 text-white">
          Dashboard
        </button>

        <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-100">
          Search Country
        </button>

        <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-100">
          Recommendations
        </button>

        <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-100">
          Wishlist
        </button>

      </div>
       <div className="mt-auto border rounded-2xl p-4">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center">
            👤
          </div>

          <div>
            <h3 className="font-semibold">
              Swarnima
            </h3>

            <p className="text-sm text-gray-500">
              swarna@gmail.com
            </p>
          </div>

        </div>

      </div>


    </div>
  );
}

export default Sidebar;