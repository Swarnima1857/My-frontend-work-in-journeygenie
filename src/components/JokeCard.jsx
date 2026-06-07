function JokeCard({ joke, handleNewJoke }) {
  if (!joke) return null;

  return (
    <div className="mt-10 mb-6">

      <div className="bg-purple-100 rounded-3xl p-6 shadow-md flex items-center justify-between">

        {/* Left Side */}
        <div className="flex items-center gap-5">

          <div className="text-6xl">
            😄
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Tired of scrolling?
              <span className="text-purple-600">
                {" "}Boost your mood!
              </span>
            </h2>

            {/* Joke Box */}
            <div className="bg-white rounded-2xl p-4 mt-4 shadow-sm w-[420px]">

              <p className="font-semibold text-lg">
                {joke.setup}
              </p>

              <p className="text-gray-600 mt-2">
                {joke.punchline}
              </p>

            </div>
          </div>

        </div>

        {/* Button */}
        <button
          onClick={handleNewJoke}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-2xl font-medium"
        >
          🔄 New Joke
        </button>

      </div>

    </div>
  );
}

export default JokeCard;