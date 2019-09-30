
import { FETCH_ELFS } from "../actions/types";

export default (state = { allElfs: [] }, action) => {
  switch (action.type) {
    case FETCH_ELFS:
      return {
        ...state,
        allElfs: action.payload
      };
    default:
      return state;
  }
};