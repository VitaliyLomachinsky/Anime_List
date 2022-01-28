const ADD_ANIME = "AddAnime";

const initialState = {
  anime_list_data: [
    { id: 1, title: "Atack on Titan", point: 10 },
    { id: 2, title: "Stains Gate", point: 10 },
    { id: 3, title: "Kuroku no Basket", point: 7 },
    { id: 4, title: "JOJO", point: 9 },
    { id: 5, title: "Death Note", point: 8 },
    { id: 6, title: "One Piece", point: 8 },
    { id: 7, title: "Naruto", point: 8 },
  ],
};

const Anime_list_reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ANIME: {
      let newAnime = {
        id: state.anime_list_data.length + 1,
        title: action.title,  
        point: action.point,
      };
      if (newAnime.title != "") {
        if (newAnime.title != null) {
          debugger;
          if (-1 < newAnime.point && newAnime.point < 11) {
            return {
              ...state,
              anime_list_data: [...state.anime_list_data, newAnime],
            };
          }
        }
      }
      break;
    }
    default:
      return state;
  }
};

export const AddAnimeActionCreator = (title, point) => ({
  type: ADD_ANIME,
  title,
  point,
});
export default Anime_list_reducer;


