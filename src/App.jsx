import {Routes, Route } from "react-router-dom";
import Feed from './Feed'
import Login from "./Login";
function App(){
  
  return(
<>

  <Routes>
    <Route path="/Feed" element={<Feed/>} />
    <Route path="/" element={<Login/>}/>
  </Routes>

</>

  )
}
export default App