import React, { Component } from 'react';
import "./Calendar.css";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '../Calendar.scss';
export default class Calendar extends Component {
    render() {
        return (
            <div className='mypage-body'>
                <div className='body-wrapper box'>
                    <div className='body-info-container'>
                        <div className='calendar-wrapper'>
                        <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]}/>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}