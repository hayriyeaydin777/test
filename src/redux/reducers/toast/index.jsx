export const toastClose = toast => ({
    type: "TOASTCLOSE",
    payload: toast,
});

export const toastOpen = toast => ({
    type: "TOASTOPEN",
    payload: toast,
});

export const toastToggle = (state=true, action) => {
    if (action.type === "TOASTCLOSE")
        return state = action.payload;
    else
        return state;
}