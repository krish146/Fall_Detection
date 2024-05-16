import {useState } from 'react'
import {useLogin} from '../hooks/useLogin'

const Login = () => {
    const [email,setEmail] = useState('') 
    const [password,setpassword] = useState('')
    const {login,error,isLoading} = useLogin()

    
    const handlesubmit = async (e) => {
        e.preventDefault()
        //console.log(email,password)
        await login(email,password) 
    }

    return (  
       <form className='login' onSubmit={handlesubmit}>
        <h3>Login</h3>
        <br/>
        <label> Email: </label>
        <input type="email" 
        onChange={(e)=> setEmail(e.target.value)}
        value={email}> 
        </input>

        <label> password: </label>
        <input type="password" 
        onChange={(e)=> setpassword(e.target.value)}
        value={password}>
        </input>
         <button disabled={isLoading} > Login </button>
         {error && <div className="error">{error}</div>}
       </form>
    )
}
 
export default Login;