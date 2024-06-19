import styled from "styled-components"
import {IoLibrary} from 'react-icons/io5'
import {MdHomeFilled, MdSearch} from 'react-icons/md'
import Playlist from "./Playlist";

function Sidebar() {
  return (
    <Container>
      <div className="top_links">
        <div className="logo">
          <img
            src='https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Green.png'
            alt="Spotify Logo"
          />
        </div>
        <ul>
          <li>
            <MdHomeFilled />
            <span>Home</span>
          </li>
          <li>
            <MdSearch />
            <span>Search</span>
          </li>
          <li>
            <IoLibrary />
            <span>Your Library</span>
          </li>
        </ul>
      </div>
      <Playlist />
    </Container>
  );
}
export default Sidebar

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000000;
    color: #b3b3b3;
    display: flex;
    flex-direction: column;
    .top_links{
      display: flex;
      flex-direction: column;
    }
    .logo{
      text-align: center;
      margin: 1rem 0;
      img{
        max-inline-size: 80%;
        block-size: auto;
      }
    }
    ul{
      list-style-type: none;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      gap:1rem;
      li{
        display: flex;
        cursor: pointer;
        gap: 1rem;
        transition: 0.3s ease-in-out;
        &:hover{
          color: white;
        }
      }
    }
`;