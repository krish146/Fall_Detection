import {createContext, useReducer, useEffect} from 'react'

export const AuthContext = createContext()

export const authReducer = (state,action )=>{
    switch(action.type){
        case 'LOGIN':
            return {user: action.payload}
        
        case 'LOGOUT':
            return {user:null}
        default:
            return state
    }
}
export const AuthContextProvider = ({children})=>{ 
    const [state,dispatch] = useReducer(authReducer,{user:null}) 
    console.log('AuthContext state: ',state) 
    
    useEffect(()=>{  //check for local storage if you are logged in or not , then dispatch user object again
          const user = JSON.parse(localStorage.getItem('user'))
          if(user){
            dispatch({type:'LOGIN',payload: user})
          }
    },[])
    return ( //provide context
        <AuthContext.Provider  value={{...state,dispatch}}> 
             {children}
        </AuthContext.Provider>
    )
}