const riskLevel = (state = 0, action) => {
    switch (action.type) {
        case 'NEW_RISK':
            return action.payload;
        default:
            return state;
    }
}
export default riskLevel;