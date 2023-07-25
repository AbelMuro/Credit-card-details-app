export default function ccNumberReducer(ccNumber = '', action){
    switch(action.type){
        case 'update cc number':
            return action.ccNumber;
        default:
            return ccNumber;
    }
}