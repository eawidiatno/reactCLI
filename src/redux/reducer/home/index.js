const informasiInitialState = {
    dataInformasi: [],
    dataSaldo: [],
    dataPrognosis: []
};

const homeReducer = (state = informasiInitialState, action) => {
    if (action.type === 'GET_INFORMASI') {
        return {
            ...state,
            dataInformasi: action.payload,

        };
    } else if (action.type === 'GET_SALDO') {
        return {
            ...state,
            dataSaldo: action.payload,

        };
    } else if (action.type === 'GET_PROGNOSIS') {
        return {
            ...state,
            dataPrognosis: action.payload,

        };
    }
    return state;
};

export default homeReducer;