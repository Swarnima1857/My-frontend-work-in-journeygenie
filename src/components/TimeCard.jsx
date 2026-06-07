import { FaClock } from "react-icons/fa";
function TimeCard({ time }) {
  if (!time) return null;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm h-[210px]">

      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <FaClock className="text-3xl text-violet-600" />
        Local Time
      </h2>

      <p className="text-3xl font-bold">
        {time.currentTime}
      </p>

      <p className="mt-4 text-gray-500">
        {time.date}
      </p>

      <p className="mt-2">
        {time.timezone}
      </p>

    </div>
  );
}

export default TimeCard;