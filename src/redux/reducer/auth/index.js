const loginInitialState = {
    dataLogin: []
};

const authReducer = (state = loginInitialState, action) => {
    if (action.type === 'GET_LOGIN') {
        return {
            ...state,
            dataLogin: action.payload,
        };
    }
    return state;
};

export default authReducer;