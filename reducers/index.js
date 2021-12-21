import set_movie_name from "./setname";
import set_movie_data from "./setdata";
import { combineReducers } from "redux";

const rootReducer= combineReducers({
     set_movie_name, set_movie_data
})

export default rootReducer;