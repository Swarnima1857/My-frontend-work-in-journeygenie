export const getCountryData = async (countryName) => {

  try {

    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    );

    const data = await response.json();

    return {

      name: data[0].name.common,

      capital: data[0].capital?.[0] || "N/A",

      currency: Object.keys(data[0].currencies)[0],

      flag: data[0].flags.png,

    };

  } catch (error) {

    console.log(error);

  }

};
 