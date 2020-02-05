import { call, put } from "redux-saga/effects";
import { READ_REMINDERS_SUCCESS, READ_REMINDERS_ERROR, 
 } from "../ActionTypes";

const reminders = [
    {
        id:1,
        reminder:'Reminder 1',
        day:'Wed Feb 05 2020 00:20:15 GMT-0500',
        color:'#21c236'

    },
    {
        id:2,
        reminder:'Reminder 2',
        date:'Thu Feb 06 2020 00:20:15 GMT-0500',
        color:'#da6eff'


    },
    {
        id:3,
        reminder:'Reminder 3',
        date:'Thu Feb 06 2020 00:20:15 GMT-0500',
        color:'#FF0044'

    },
    {        
        id:4,
        reminder:'Reminder 4',
        date:'Thu Mar 06 2020 00:20:15 GMT-0500',
        color:'#da6eff'
    }
    
]

const readReminders = () => {
    return reminders;
}
export function* readRemindersSaga(action) {
    try {
        const reminders = yield call(readReminders);
        yield put({
            type: READ_REMINDERS_SUCCESS,
            payload: reminders
        })
    } catch(error){
        yield put({
            type: READ_REMINDERS_ERROR,
            payload:{
                title:"Querido usuario, lo sentimos hubo un error",
                debug: error
            }
        })
    }
}




