import 'whatwg-fetch';

const API_URL = process.env.API_URL
    || 'https://forgapp-mbourges.c9users.io:8080/api';

export default function request(url, options) {
  return fetch(API_URL + url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => ({ data }))
    .catch((err) => ({ err }));
}

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
