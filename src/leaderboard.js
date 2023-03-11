const MAX_LEADERBOARD_SIZE = 10;

/**
 * Get the leaderboard for a given gamemode and difficulty
 */
export function get(leaderboardName) {
  const data = localStorage.getItem(`leaderboard-${leaderboardName}`);
  return data ? JSON.parse(atob(data)) : [];
}

/**
 * Add a score to the leaderboard, record the time the score was added and sort the leaderboard
 */
export function add(leaderboardName, score, ascending = false) {
  const data = getLeaderboard(leaderboardName);
  data.push({ time: Date.now(), score });
  data.sort((a, b) => (ascending ? a.score - b.score : b.score - a.score));
  data.splice(MAX_LEADERBOARD_SIZE);
  localStorage.setItem(`leaderboard-${leaderboardName}`, btoa(JSON.stringify(data)));
}

/**
 * Display the leaderboard in the given element
 */
export function display(leaderboardName, leaderboardElem) {
  // Clear the leaderboard element
  leaderboardElem.innerHTML = '';

  const data = getLeaderboard(leaderboardName);

  // Add the scores to the leaderboard
  for (const { time, score } of data) {
    const li = document.createElement('li');
    li.innerHTML = `<div>${score}</div><div>${new Date(time).toLocaleDateString()}</div>`;
    leaderboardElem.appendChild(li);
  }
}