
import { FETCH_ELFS } from "../actions/types";

export default (state = {testProp: ''}, action) => {
  switch (action.type) {
    case FETCH_ELFS:
      return action.payload;
    default:
      return state;
  }
};