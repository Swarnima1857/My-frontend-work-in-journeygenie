function CountryCard({ country }) {

  if (!country) return null;

  return (
    <div
      className="
        bg-white
        rounded-3xl
        py-8 px-3
        shadow-sm
        flex
        gap-6
      "
    >

      <img
        src={country.flag}
        alt={country.name}
        className="
          w-60
          h-40
          object-cover
          rounded-2xl
        "
      />

      <div>

        <h1 className="text-5xl font-bold">
          {country.name}
        </h1>

        <p className="mt-6 text-xl">
          Capital: {country.capital}
        </p>

        <p className="mt-2 text-xl">
          Currency: {country.currency}
        </p>

      </div>

    </div>
  );
}

export default CountryCard;