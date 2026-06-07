import { WiDayCloudy } from "react-icons/wi";
function WeatherCard({ weather }) {
  if (!weather) return null;
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm h-[210px]">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <WiDayCloudy className="text-3xl text-violet-600" /> 
        Weather
      </h2>
      <p className="text-4xl font-bold">
        {weather.temperature}°C
      </p>
      <p className="mt-3 text-gray-600">
        {weather.condition}
      </p>
      <p className="mt-2">
        Humidity: {weather.humidity}%
      </p>
      <p>
        Wind: {weather.wind} km/h
      </p>
    </div>
  );
}
export default WeatherCard;