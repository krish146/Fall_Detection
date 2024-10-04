import {useState} from 'react'
import {useAuthContext} from './useAuthContext'

export const useSignup = () => { // why are parameters not here ?
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch} = useAuthContext(); // wrapping up , values , changing function are returned here

    const signup = async (email,password) => {
        setIsLoading(true)
        setError(null)

        // console.log("signup is running",email)

        const response = await fetch('/Hobnob/signup',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password })
        })
        
        const json = await response.json()  //the user object - email and token
        
         console.log("response: ",json)

        if(!response.ok) {
            setIsLoading(false)
            setError(json.error)
           console.log("response again:  ",json) 
        }

        if(response.ok){
            localStorage.setItem('user',JSON.stringify(json))

        //update the auth context 
        dispatch({type: 'LOGIN',payload:json}) //payload is email and token
        setIsLoading(false)
        }
    }
    
    return { signup , isLoading, error} //returning from the hook
}