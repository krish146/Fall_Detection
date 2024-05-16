import {useState } from 'react'
import {useSignup} from '../hooks/useSignup'
const Signup = () => {
    const [email,setEmail] = useState('')
    const [password,setpassword] = useState('')
    //providing context to all (Ex: profile page) , also accessing jwbt token
    const { signup , error , isLoading} = useSignup()


    
    const handlesubmit = async (e) => {
        e.preventDefault()
        console.log(email,password)
        await signup(email,password) // call the function to verify and return context to everyone
        //error is checked below 
    }


    return (  
       <form className='signup' onSubmit={handlesubmit}>
        <h3>Sign up</h3>
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
      
         <button disabled={isLoading}> Signup </button>
         {error && <div className="error">{error} </div>}
       </form>
    )
}
 
export default Signup;