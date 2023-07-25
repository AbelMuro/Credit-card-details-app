export default function ccCVCReducer(ccCVC = '', action){
    switch(action.type){
        case 'update cc cvc':
            return action.ccCVC;
        default:
            return ccCVC;
    }
}