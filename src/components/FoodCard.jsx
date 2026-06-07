import { FaUtensils } from "react-icons/fa";
function FoodCard({ food }) {
  if (!food) return null;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm h-[260px]">

      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <FaUtensils className="text-3xl text-violet-600" />
        Traditional Food
      </h2>

      <div className="space-y-3">

        <img
          src={food.image}
          alt={food.name}
          className="w-full h-40 object-cover rounded-xl"
        />

        <p className="text-2xl font-bold">
          {food.name}
        </p>

        <p className="text-gray-600">
          {food.description}
        </p>

      </div>

    </div>
  );
}

export default FoodCard;