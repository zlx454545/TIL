import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "텔미",
      duration: "4:05",
    },
    {
      title: "퇴사",
      duration: "3:05",
    },
    {
      title: "파란색",
      duration: "2:22",
    },
    {
      title: "신호등",
      duration: "4:16",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})