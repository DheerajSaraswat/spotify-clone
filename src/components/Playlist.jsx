import { useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import styled from "styled-components";
import { reducerCases } from "../globalVars";

function Playlist() {
  const [{ token, playlists, selectedPlaylistId }, dispatch] = useStateProvider();
  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        { 
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(response)
      const { items } = response.data;
      //   console.log(items);
      const playlists = items.map(({ name, id }) => {
        return { name, id };
      });
    //   console.log(playlists);
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };
    getPlaylistData();
  }, [token, dispatch]);

  const changeCurrentPlaylist = (selectedPlaylistId)=>{
    dispatch({type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId})
  }

  return (
    <Container>
      <ul>
        {playlists.map(({ name, id }) => {
          return (
            <li key={id} onClick={() => changeCurrentPlaylist(id)}>
              {name}
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
export default Playlist;

const Container = styled.div`
    height: 100%;
    overflow: hidden;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: 50vh;
    max-height: 100%;
    overflow: auto;
    &::-webkit-scrollbar{
        width: 0.7rem;
        &-thumb{
            background-color: #242323;
        }
    }
    gap: 1rem;
    li {
      display: flex;
      cursor: pointer;
      gap: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        color: white;
      }
    }
  }
`;
