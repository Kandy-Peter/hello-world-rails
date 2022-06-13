import axios from "axios"

const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';

const getGreeting = (greeting) => ({
  type: FETCH_GREETING_SUCCESS,
  payload: greeting,
});

const greetingState = {
  greeting: '',
};

export const reducer = (state = greetingState,
  { type, payload }) => {
    switch (type) {
      case FETCH_GREETING_SUCCESS:
        return {
          ...state,
          greeting: payload,
        };
      default:
        return state;
    };
};

const fetchGreetings = () => async (dispatch) => {
  const result = await axios.get('/api/v1/greetings');
    const data = result.data.greetings
    dispatch(getGreeting(data));
};

export default fetchGreetings;
