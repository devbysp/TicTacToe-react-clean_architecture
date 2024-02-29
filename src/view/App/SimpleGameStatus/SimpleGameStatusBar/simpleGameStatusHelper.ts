export const getStatusBarStyle = (state: 'this game is a draw' | 'there is a winner' | 'the game is in progress') => {
  const style = {
    'this game is a draw': 'adraw',
    'there is a winner': 'winner',
    'the game is in progress': ''
  }
  return style[state]
}

export const getText = (
  state: 'this game is a draw' | 'there is a winner' | 'the game is in progress',
  player: 'X' | 'O',
  winner: 'X' | 'O' | '') => {

  const text = {
    'this game is a draw': 'A draw',
    'there is a winner': `Winner: ${ winner }`,
    'the game is in progress': `Current player: ${ player }`
  }
  return text[state]
}


