import {
         READ_REMINDERS, READ_REMINDERS_SUCCESS, READ_REMINDERS_ERROR,
     
} from "../ActionTypes";

const init = {
    reminders:[],
    reminder:{},
    loading:false,
    error:false,   
}

export default (state=init, action)=>{
    switch(action.type){

        case READ_REMINDERS: 
        return {
            ...state,
            loading:true
        }


        case READ_REMINDERS_SUCCESS: 
        return {
            ...state,
            loading:false,
            reminders: action.payload
        }

        case READ_REMINDERS_ERROR: 
        return {
            ...state,
            loading:false,
            error:action.payload
        }

        default: return state;
    }

}
//helpers
const replaceReminder = (reminders, reminder)=>{
    return []
}

const deleteReminder = (reminders, reminder)=>{
    return []
}