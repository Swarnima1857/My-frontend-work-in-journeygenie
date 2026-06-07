export const getTimeData = () => {

  const now = new Date();

  return {

    currentTime: now.toLocaleTimeString(),

    date: now.toDateString(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

  };

};