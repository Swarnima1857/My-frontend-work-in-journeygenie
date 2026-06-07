export const getSong = async (country) => {
  try {
    const response = await fetch(
      `https://de1.api.radio-browser.info/json/stations/bycountry/${country}`
    );

    const data = await response.json();

    if (!data || data.length === 0) {
      return null;
    }

    const song = data[0];

    return {
      name: song.name || "No Song Found",
      artist: song.tags || "Unknown Artist",
      album: song.country || country,
    };

  } catch (error) {
    console.log(error);
    return null;
  }
};