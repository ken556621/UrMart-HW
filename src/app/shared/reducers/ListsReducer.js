const initiaState = {
    authenticated: false,
    authenticating: true
}

const listsReducer = (state = initiaState, action) => {
    switch (action.type){
        case "STORE_LISTS":
            return {
                ...state, 
                authenticating: false,
                authenticated: true
            }
        case "UPDATE_LISTS":
            return {
                ...state, 
                authenticating: false,
                authenticated: true
            }
        default :
            return state
    }
}

export default listsReducer;