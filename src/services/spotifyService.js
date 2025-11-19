// api/spotifyApi.js
const clientId = "ba42e441ded44d0d81d99ebcee70accd";
const clientSecret = "504f5915c5c344b19704b611155f0bc9";

const getToken = async () => {
  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
  });

  const data = await result.json();
  console.log(data.access_token);
  return data.access_token;
};

const getGenres = async (token) => {
  const result = await fetch(
    `https://api.spotify.com/v1/browse/categories?locale=de_CH`,
    { headers: { Authorization: "Bearer " + token } }
  );
  return (await result.json()).categories.items;
};

const getPlaylistByGenre = async (token, genreId) => {
  const result = await fetch(
    `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=10`,
    { headers: { Authorization: "Bearer " + token } }
  );
  return (await result.json()).playlists.items;
};

const getTracks = async (token, endpoint) => {
  const result = await fetch(`${endpoint}?limit=10`, {
    headers: { Authorization: "Bearer " + token },
  });
  return (await result.json()).items;
};

const getTrack = async (token, endpoint) => {
  const result = await fetch(endpoint, {
    headers: { Authorization: "Bearer " + token },
  });
  return await result.json();
};

const searchTracks = async (token, song = "", artist = "") => {
  let query = "";

  if (song) query += `track:${song}`;
  if (artist) query += song ? ` artist:${artist}` : `artist:${artist}`;

  if (!query) return []; // falls nichts eingegeben

  const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&market=CH&limit=10`;

  const result = await fetch(url, {
    headers: { Authorization: "Bearer " + token },
  });

  const data = await result.json();
  return data.tracks.items; // Array von Tracks
};

// TODO: https://developer.spotify.com/documentation/web-api/reference/add-to-queue

export default {
  getToken,
  getGenres,
  getPlaylistByGenre,
  getTracks,
  getTrack,
  searchTracks,
};
