const API = {
  get: {
    teams: () => customFetch(`/teams`),
    games: () => customFetch(`/games`),
    inGameData: (gameId) => customFetch(`/games/${gameId}/scores`),
  },
  post: {},
};

const customFetch = async (...param) => {
  const fetchData = await (await fetch(...param)).json();
  if (fetchData.statusCode >= 400 || fetchData.body === null)
    throw { status: "fail" };
  return fetchData;
};

export default API;
