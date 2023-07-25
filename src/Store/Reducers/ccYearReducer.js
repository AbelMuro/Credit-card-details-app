export default function ccYearReducer(ccYear = '', action){
    switch(action.type){
        case 'update cc year':
            return action.ccYear;
        default:
            return ccYear;
    }
}