import Navbar1 from './components/Navbar1'
//pages
import Home from './pages/Home'
import { useAuthContext } from './hooks/useAuthContext'
// import communitylist from './pages/communitylist'

import Login from './pages/Login'
import Signup from './pages/Signup'

import {BrowserRouter , Routes, Route, Navigate} from 'react-router-dom'
function App() {
  const {user }=useAuthContext() //global info
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar1/> 
    
    <div className="pages">
    <Routes>
      {/* <Route path="/communitylist" element={ <communitylist/> }/> */}
      <Route path="/Home" element={user? <Home/> : <Navigate to="/login"></Navigate>}/>
      <Route path="/Login" element={!user? <Login/> : <Navigate to="/Home"></Navigate> }/>
      <Route path="/Signup" element={!user? <Signup/>: <Navigate to="/Home"></Navigate> }/>
    </Routes>
    </div>
    </BrowserRouter>
  </div>
  );
}

export default App;
