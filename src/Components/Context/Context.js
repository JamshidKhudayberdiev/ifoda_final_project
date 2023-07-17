import {createContext, useReducer} from 'react'

const reducer = (state, action) => {
    if(action.type === 'TOGGLE_USER'){
       return {user: !state.user}
    }
}
   
export const userContext = createContext()




export function UserProvider({children}){
    const [state, dispatch] = useReducer(reducer, {user: false})

    const userAuth = () => {
        dispatch({type: 'TOGGLE_USER'})
     }

    return <userContext.Provider value={{...state, userAuth}}>
        {children}
    </userContext.Provider>
}


