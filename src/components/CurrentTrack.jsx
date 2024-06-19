import styled from "styled-components"
import { useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";
import axios from 'axios'
import { reducerCases } from "../globalVars";

function CurrentTrack() {
    const [{token, currentlyPlaying}, dispatch] = useStateProvider();
    useEffect( ()=>{
        const getCurrentTrack = async () => {
            const response = await axios.get(
              "https://api.spotify.com/v1/me/player/currently-playing",{
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
              }
            );
            // console.log(response);
            if (response.data !== "") {
            const currentlyPlaying = {
              id: response.data.item.id,
              name: response.data.item.name,
              artists: response.data.item.artists.map((artist) => artist.name),
              image: response.data.item.album.images[2].url,
            };
            dispatch({type: reducerCases.SET_PLAYING, currentlyPlaying})
            } else {
              dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying: null });
            }
        }
        getCurrentTrack();
    },
     [token, dispatch] )
  return (
    <Container>
        {
            currentlyPlaying && (
                <div className="track">
                    <div className="track_image">
                        <img src={currentlyPlaying.image} alt="currentlyplaying" />
                    </div>
                    <div className="track_info">
                        <h4>{currentlyPlaying.name}</h4>
                        <h6>{currentlyPlaying.artists}</h6>
                    </div>
                </div>
            )
        }
    </Container>
  )
}
export default CurrentTrack

const Container = styled.div`
    .track{
        display: flex;
        align-items: center;
        gap: 1rem;
        &_info{
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
            h4{
                color: white;
            }
            h6{
                color: #b3b3b3;
            }
        }
    }
`;