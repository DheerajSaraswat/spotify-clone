import { reducerCases } from "../globalVars"

export const initialState = {
  token: null,
  playlists: [],
  userInfo: null,
  selectedPlaylistId: "7yIzY4ZYcApLBiBJd8Pyiy",
  playlistInfo: null,
  currentlyPlaying: null,
  playerState: false,
  searchResult: null,
  searchStatus: false,
};

const reducer = (state, action) => {
    switch (action.type) {
      case reducerCases.SET_TOKEN: {
        return {
          ...state,
          token: action.token,
        };
      }
      case reducerCases.SET_PLAYLISTS: {
        return {
          ...state,
          playlists: action.playlists,
        };
      }
      case reducerCases.SET_USER: {
        return {
          ...state,
          userInfo: action.userInfo,
        };
      }
      case reducerCases.SET_PLAYLIST: {
        return {
          ...state,
          playlistInfo: action.playlistInfo,
        };
      }
      case reducerCases.SET_PLAYING: {
        return {
          ...state,
          currentlyPlaying: action.currentlyPlaying,
        };
      }
      case reducerCases.SET_PLAYERSTATE: {
        return {
          ...state,
          playerState: action.playerState,
        };
      }
      case reducerCases.SET_PLAYLIST_ID: {
        return {
          ...state,
          selectedPlaylistId: action.selectedPlaylistId,
        };
      }
      default:
        return state;
    }
}

export default reducer