const initiaState = {
    allLists: [],
    nextPageToken: ""
}

const listsReducer = (state = initiaState, action) => {
    switch (action.type){
        case "STORE_LISTS":
            return {
                ...state, 
                allLists: action.allLists,
                nextPageToken: action.nextPageToken
            }
        case "UPDATE_LISTS":
            return {
                ...state, 
                allLists: action.item,
                nextPageToken: action.nextPageToken
            }
        default :
            return state
    }
}

export default listsReducer;