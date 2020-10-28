export const initialState = {
    user: null,
    playlists: [],
    playling: false,
    item: null,
    token: null,
    // token: 'BQBr6RlyhLiVs71TjqSk-nlKVW5FqZd8g8yTDXo5Hb132tjK6IALgyCiBB4QinsncvTE2PXBxKxDuXJ8wYzwPJaWMuER_UO1_8gb0Ls_ITWqJ-wK15BifTOINpy_yH2KRGYYuE6i4fPWKqWZWGtsFwPFkiB8KgcLhlCvUiRfD5UsSVbqrFwY',
}

export const reducer = (state, action) => {
console.log(action);

    switch(action.type) {   // Action -> type, [payload]
        case 'SET_USER':    // if action type is SET_USER, then do this.
            return {        // we are returning new state here.
                ...state,
                user: action.user,   // by using '...' we are not overriding the previous state
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
            case 'SET_DISCOVER_WEEKLY':
                return {
                    ...state,
                    discover_weekly: action.discover_weekly,
                };
        default:
            return state    
    }

}




// reducer listens to the actions that are
// fired along the dispatch.

