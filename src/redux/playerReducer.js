

const initialState = {
    avatarUrl: "",
    birthday: "",
    height: null,
    id: null,
    name: '',
    number: null,
    position: "",
    team: null,
    teamName: "",
    weight: null
}

function playerReducer(state = initialState, action) {
    
    if (action.type === "player/set") {
        return {
            ...state, 
            ...action.payload
        }
    } 
    // else if (action.type === 'auth/logout') {
    //     return {
    //         ...state,
    //         ...action.payload
            
    //     }
    // }

    return state
}


export default playerReducer