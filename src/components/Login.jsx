import styled from "styled-components";
import { apiURL, clientId, redirectURL } from "../globalVars";

function Login() {
  const handleClick = () => {
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "user-read-playback-position",
      "user-top-read",
      "user-read-recently-played",
    ];
    window.location.href = `${apiURL}?client_id=${clientId}&redirect_uri=${redirectURL}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  }
  return (
    <Container>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Black.png"
        alt="Spotify Logo"
      />
      <button onClick={handleClick}>Connect Spotify</button>
    </Container>
  );
}
export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  gap: 5rem;
  background-color: #1db954;
  img {
    height: 20vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: black;
    color: #1db954;
    font-size: 1.5rem;
    border-style: none;
    cursor: pointer;
  }
`;
