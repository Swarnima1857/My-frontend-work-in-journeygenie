export const getWeather = async (country) => {
  try {
    const response = await fetch(
      `https://wttr.in/${country}?format=j1`
    );

    const data = await response.json();

    const current = data.current_condition[0];

    return {
      temperature: current.temp_C,
      humidity: current.humidity,
      condition: current.weatherDesc[0].value,
      wind: current.windspeedKmph,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};