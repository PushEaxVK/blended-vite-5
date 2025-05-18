import axios from 'axios';

export const getUserInfo = async ({ latitude, longitude }) => {
  // const apiKey = 'd4683b09d0c94ec0aebf0b2e043decbf';
  const myApiKey = '99da5846b45f443b87807cb7c6f58c4f';
  const urlPosition = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}`;
  const { data } = await axios.get(urlPosition, {
    params: {
      key: myApiKey,
      language: 'en',
    },
  });
  return data;
};
