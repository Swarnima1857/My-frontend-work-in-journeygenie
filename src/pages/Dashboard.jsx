import { useState } from "react";

import SearchBar from "../components/SearchBar";
import CountryCard from "../components/CountryCard";
import WeatherCard from "../components/WeatherCard";
import Sidebar from "../components/Sidebar";
import TimeCard from "../components/TimeCard";
import SongCard from "../components/SongCard";
import JokeCard from "../components/JokeCard";
import FoodCard from "../components/FoodCard";

import { getCountryData } from "../services/countryService";
import { getWeather } from "../services/weatherService";
import { getTimeData } from "../services/timeService";
import { getSong } from "../services/songService";
import { getJoke } from "../services/jokeService";

function Dashboard() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState(null);
  const [weather, setWeather] = useState(null);
  const [time, setTime] = useState(null);
  const [song, setSong] = useState(null);
  const [food, setFood] = useState(null);
  const [joke, setJoke] = useState(null);

  const handleNewJoke = async () => {
    const jokeData = await getJoke();
    setJoke(jokeData);
  };

  const handleSearch = async () => {
    if (!search.trim()) return;

    try {
      const countryData = await getCountryData(search);
      const weatherData = await getWeather(search);
      const timeData = getTimeData();
      const songData = await getSong(search);
      const jokeData = await getJoke();

      setCountry(countryData);
      setWeather(weatherData);
      setTime(timeData);
      setSong(songData);
      setJoke(jokeData);
      setFood({
});

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-slate-100 min-h-screen">

      <div className="grid grid-cols-12">

        {/* Sidebar */}
        <div className="col-span-2">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-span-10 flex flex-col min-h-screen">

          <div className="p-8 flex-grow">

            {/* Search Bar */}
            <SearchBar
              search={search}
              setSearch={setSearch}
              handleSearch={handleSearch}
            />

            {/* Cards Section */}
            <div className="grid grid-cols-12 gap-6 mt-6">

              {/* Country Card */}
              <div className="col-span-6">
                <CountryCard country={country} />
              </div>

              {/* Weather Card */}
            <div className="col-span-3">
  <div className="flex flex-col gap-4">

    {weather && (
      <WeatherCard weather={weather} />
    )}

    {food && (
      <FoodCard food={food} />
    )}

  </div>
</div>

              {/* Time + Song Card */}
              <div className="col-span-3">
                <div className="flex flex-col gap-4">
                {time && (
      <TimeCard time={time} />
    )}
                {song &&(
                  <SongCard song={song} />
                )}
                </div>
              </div>

            </div>

            {/* Joke Card Footer */}
            <div className="mt-8">
              <JokeCard
              joke={joke}
    handleNewJoke={handleNewJoke} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;