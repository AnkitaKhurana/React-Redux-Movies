export function getMovies() {
  return {
    type: 'CALL_API',
    payload: {
      endpoint: '/movieslisting',
      types: [
        'FETCH_MOVIES',
        'FETCH_MOVIES_SUCCEEDED',
        'FETCH_MOVIES_FAILED'
      ],
      method: 'GET'
    }
  };
}