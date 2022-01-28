import List from "./List.js";
import { connect } from "react-redux";
import { AddAnimeActionCreator } from "../store/anime_list_reducer.js";

const mapStateToProps = (state) => {
  return {
    Anime_list_data: state.Anime_list_Data.anime_list_data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    AddAnime: (title, point) => {
      dispatch(AddAnimeActionCreator(title, point));
    },
  };
};

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);
export default ListContainer;
