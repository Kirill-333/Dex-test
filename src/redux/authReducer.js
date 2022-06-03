import Cookies from "js-cookie"
// const token = Cookies.get('token')
const initialState = JSON.parse(localStorage.auth || '{}') 
// Cookies.get('token') || ""
// 
console.log(initialState)
function authReducer(state = initialState, action) {
    
    if (action.type === "auth/loaded") {
        return {
            ...state, 
            isLoaded: action.payload.isLoaded,
            token: action.payload.token
        }
    } 
    // console.log(state)
    return state
}


export default authReducer