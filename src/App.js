import Login from "./components/Login"
import { useEffect } from "react";
import {useStateProvider} from "./utils/StateProvider"
import { reducerCases } from "./globalVars";
import Spotify from "./components/Spotify";

function App() {
  const [{token}, dispatch] = useStateProvider()
  useEffect(() => {
    const hash = window.location.hash
    if(hash){
      const token = hash.substring(1).split('=')[1].split('&')[0]
      dispatch({type: reducerCases.SET_TOKEN, token})
    }
  }, [token, dispatch])
  

  return (
    <div>
      {
        token ? <Spotify /> : <Login />
      }
    </div>
  )
}
export default App