export const historySearchText = payload => ({
    type: "HISTORYSEARCHTEXT",
    payload
})

export const setSearchText = payload => ({
    type: "SETSEARCH",
    payload,
});

export const getSearchText = (state = "", action) => {
    switch (action.type) {
        case "SETSEARCH":
            return action.payload;
        default:
            return state;
    }
};

export const setDisplayCategories = payload => ({
    type: "SETDISPLAYCATEGORIES",
    payload,
});

export const getDisplayCategories = (state = "", action) => {
    switch (action.type) {
        case "SETDISPLAYCATEGORIES":
            return action.payload;
        default:
            return state;
    }
};