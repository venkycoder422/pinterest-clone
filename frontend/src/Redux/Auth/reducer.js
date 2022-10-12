import { LOGIN, LOGOUT } from "./actionTypes";

const initialState ={
    userData : null
}
export const reducer = (state= initialState , action) => {
    switch (action.type) {
        case LOGIN: return{
            ...state,
            userData: action.payload
        }
        case LOGOUT : return{
            ...state,
            userData: initialState
        }
    
       default: return state
    }
}