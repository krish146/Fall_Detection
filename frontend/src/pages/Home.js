// import {useEffect } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

const Home = () => {
    const {user} = useAuthContext()

    //check if authurisaiton token is sent everytime for access and also user object is not empty if to interact with client

    return ( <div className="center-container"> 
    <div className="Hobnob">
      
      {/* {user && <h1>Home</h1>} */}

      {user && (
        <form className="search-form" action="/search" method="get">
          <label id="community search bar">Hobnob Communities</label>
          <input
            type="search"
            id="search"
            name="q"
            placeholder="Search..."
          />
          <button type="submit">Search</button>
        </form>
      )}
    </div>
  </div>
    )
}
 
export default Home;
