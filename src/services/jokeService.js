export const getJoke = async () => {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    if (!response.ok) {
      throw new Error("Failed to fetch joke");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching joke:", error);
    return null;
  }
};
