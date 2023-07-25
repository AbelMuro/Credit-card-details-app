export default function ccNameReducer(ccName = '', action){
    switch(action.type){
        case 'update cc name':
            return action.ccName;
        default:
            return ccName;
    }
}