const initialState = {
  movies: [] 
};

function updateMovies(state, action) {
  const newArray = action.payload.json.slice();
  return newArray;
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_MOVIES_SUCCEEDED':
     {     
      return {
        ...state,
        movies: updateMovies(state, action)
      };
    }
    
    case 'FETCH_MOVIES_FAILED':       
      return {
        ...state,
        movies: []
      };
    
    default: return state;
  }

}
