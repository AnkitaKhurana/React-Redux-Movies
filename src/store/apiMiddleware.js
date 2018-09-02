/* global fetch */

const BASE_URL = 'http://starlord.hackerearth.com'

function callApi(endpoint, method) {
  const config = {
    method,
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }; 

  return fetch(BASE_URL + endpoint, config)
    .then(response =>
      response.text()
        .then(text => ({ text, response })))
    .then(({ text, response }) => {
      if (!response.ok) {
        const error = new Error(response.statusText);
        return Promise.reject(error);
      }
      return text;
    })
    .catch(err => Promise.reject(err.message));
}

const apiMiddleware = store => next => (action) => {
  if (action.type !== 'CALL_API') {
    return next(action);
  }

  const {
    endpoint,
    types,    
    method
  } = action.payload;

  const [requestType, successType, errorType] = types;

  const handleResponse = (response) => {
    const responseJSON = JSON.parse(response);
    return next({
      payload: {
        json: responseJSON,       
      },
      type: successType
    });
  };

  const handleErrorResponse = error => next({
    error: error.message || 'There was an error.',
    type: errorType
  });
  store.dispatch({ type: requestType });
  let call;
 
    call = callApi(endpoint, method, null)
      .then(handleResponse)
      .catch(handleErrorResponse);
  return call;
};
export default apiMiddleware;
