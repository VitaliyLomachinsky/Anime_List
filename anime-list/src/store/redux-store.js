import { createStore, combineReducers } from "redux";
import Anime_list_reducer from "./anime_list_reducer";

let reducers = combineReducers({
  Anime_list_Data: Anime_list_reducer,
});

let store = createStore(reducers);

export default store;
