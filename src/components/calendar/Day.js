
import React, { useEffect } from 'react';
import { Badge } from 'antd';
import { connect } from 'react-redux';
import { READ_REMINDERS } from '../../redux/ActionTypes';
import moment from 'moment';



const remindersOnDay = (reminders, currentDay) => {
    const isDay = (item, currentDay) => {
        const date = moment(item.date);
        if (date.format('DD') === currentDay.format('DD')
            && (date.format('MM') === currentDay.format('MM'))
            && (date.format('YYYY') === currentDay.format('YYYY'))
        ) {
            return true;
        }

        return false;
    }
    const remindersOnDay = reminders.filter(item => isDay(item, currentDay));
    return remindersOnDay;
}

const Day = ({reminders,currentDay}) => {

    const RemindersOnDay = remindersOnDay(reminders, currentDay);

    return (
        <ul className="events">
            {RemindersOnDay.map(item => (
                <li key={item.reminder}>
                    <Badge color={item.color} text={item.reminder} />
                </li>
            ))}
        </ul>
    );
}
export default Day