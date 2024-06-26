import styled from "styled-components"
import { useStateProvider } from "../utils/StateProvider";
import axios from 'axios';

function Volume() {

    const [{token}] = useStateProvider();
    const setVolume = async (e) => {
        await axios.put("https://api.spotify.com/v1/me/player/volume",
      {},
      {
        params: {
          volume_percent: parseInt(e.target.value),
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
    }
    

  return (
    <Container>
        <input type="range" min={0} max={100} onMouseUp = { (e) => setVolume(e)} />
    </Container>
  )
}
export default Volume

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  input {
    width: 10rem;
    border-radius: 2rem;
    height: 0.3rem;
    accent-color: #1db954;
  }
`;