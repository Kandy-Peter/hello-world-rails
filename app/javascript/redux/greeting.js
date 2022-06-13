import axios from "axios"

const FETCH_GREETINGS = 'hello-rails-react/greetings/FETCH_GREETINGS'

const getGreetings = (payload) => ({
  type: FETCH_GREETINGS,
  payload,
})


const initialState = {
    greetings: []
}

export const fetchGreetingsFromApi = () => async (dispatch) => {
    const res = await axios.get('/api/v1/greetings');
    const data = res.data.greetings
    dispatch(getGreetings(data));
  };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETINGS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer