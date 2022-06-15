import axios from "axios"

const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';

const getGreeting = (payload) => ({
  type: FETCH_GREETING_SUCCESS,
  payload
});

const initialState = []

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_GREETING_SUCCESS:
        return action.payload;
      default:
          return state;
    };
};

const fetchGreetings = () => async (dispatch) => {
  const result = await axios.get('/api/v1/greetings');
    const data = result.data[0].text
    dispatch(getGreeting(data));
};

export default fetchGreetings;
