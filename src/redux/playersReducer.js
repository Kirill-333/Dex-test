const initialState = []


function playersReducer(state = initialState, action) {
    console.log(action)
    if (action.type === "players/set") {
        return action.payload
        
    } 

    return state
}


export default playersReducer