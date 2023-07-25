export default function ccMonthReducer(ccMonth = '', action){
    switch(action.type){
        case 'update cc month':
            return action.ccMonth;
        default:
            return ccMonth;
    }
}