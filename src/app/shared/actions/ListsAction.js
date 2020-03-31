export function storeLists(allLists, nextPageToken, cb) {
    return  {
        type: "STORE_LISTS",
        allLists,
        nextPageToken
    };
}

export function updateLists(cb) {
    return  {
        type: "UPDATE_LISTS"
    };
}