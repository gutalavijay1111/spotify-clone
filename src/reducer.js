export const initialState = {
    user: null,
    playlist: [],
    playling: false,
    item: null,
    token: null,
}

export const reducer = (state, action) => {
console.log(action);

    switch(action.type) {   // Action -> type, [payload]
        case 'SET_USER':    // if action type is SET_USER, then do this.
            return {        // we are returning new state here.
                ...state,
                user: action.user   // by using '...' we are not overriding the previous state
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default:
            return state    
    }

}




// reducer listens to the actions that are
// fired along the dispatch.

