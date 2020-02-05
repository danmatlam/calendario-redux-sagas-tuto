import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Calendar, } from 'antd';
import Month from './Month';
import Day from './Day'
import { READ_REMINDERS} from '../../redux/ActionTypes';

const MyCalendar = ({ readReminders, reminderState , createReminder}) => {

    // triggers
    useEffect(() => { readReminders() }, []);

    // constants
 

    // functions
        const DayToFn = (day) => {
            return (
                <Day
                    reminders={reminderState.reminders}
                    currentDay={day}>
                </Day>
            );
        }
        //HandleSelectDate





    //COMPONENTE
    return (
        <>
            <Calendar
                dateCellRender={DayToFn}
                monthCellRender={Month}
            />
        </>

    )
}




const mapStateToProps = ({ reminderState }) => {
    return {
        reminderState
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        readReminders: () => dispatch({ type: READ_REMINDERS }),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyCalendar);