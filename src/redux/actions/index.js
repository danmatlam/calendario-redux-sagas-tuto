import {takeLatest} from 'redux-saga/effects';
import {READ_REMINDERS } from './../ActionTypes';
import { readRemindersSaga } from './reminderSaga';

export function * watcherSaga(){
    yield takeLatest(READ_REMINDERS, readRemindersSaga);

}
