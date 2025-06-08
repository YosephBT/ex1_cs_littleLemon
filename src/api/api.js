const seededRandom = (seed) => {
  const m = 2**35 - 31;
  const a = 185852;
  let s = seed % m;
  return () => (s = (s * a) % m) / m;
};

export const fetchAPI = (date) => {
  let dateObj;
  if (date instanceof Date) {
    dateObj = date;
  } else if (typeof date === 'string') {
    dateObj = new Date(date);
  } else {
    dateObj = new Date();
  }

  if (isNaN(dateObj.getTime())) {
    dateObj = new Date();
  }

  const result = [];
  const random = seededRandom(dateObj.getDate());
  for (let hour = 17; hour <= 23; hour++) {
    if (random() < 0.5) result.push(`${hour}:00`);
    if (random() < 0.5) result.push(`${hour}:30`);
  }
  return result;
};

export const submitAPI = (formData) => {
  console.log('Reservation submitted:', formData);
  return true; 
};