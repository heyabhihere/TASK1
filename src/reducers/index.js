const initialState = {
    showSet1: false,
    showSet2: false,
};

export function changeState(state = initialState, action) {
    switch (action.type) {
        case 'OPEN1': return { ...state, showSet1: true, showSet2: false };
        case 'OPEN2': return { ...state, showSet2: true, showSet1: false };
        
        default: return state;
    }
}
