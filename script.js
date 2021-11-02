const VOTE_URL = 'https://minecraft-mp.com/server/268676/vote?username=';

const getName = async () => {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  const {
    name: { first, last },
  } = data.results[0];
  window.location = `${VOTE_URL}${first}${last}`;
};

getName();
