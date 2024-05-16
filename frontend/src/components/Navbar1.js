import {Link} from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
    const {user}= useAuthContext()
    const {logout} = useLogout()
    const handleClick = () => { 
        logout()
    }
    
    return ( 
        <header>
            <nav className="navbar">

               <Link id="heading" to="/Home"> Hobnob </Link>
              
               { !user &&  (<div className="links"> 
                <Link to="/Login">Login</Link>
                <Link to="/Signup">Signup</Link> 
                </div>) }

                { user && (<div classname="links">
                    <span>{user.email}</span> 
                <Link onClick={handleClick}>Log out</Link>
                </div>) }

            </nav>
        </header>
     );
}
 
export default Navbar;