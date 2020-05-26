import React, {Ref} from "react"
import Props from "prop-types"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
//import interaction from '@fullcalendar/interaction';

export default class DemoApp extends React.Component{

    calendarRef = React.createRef()

    render(){
        return (
             <FullCalendar 
             defaultView="dayGridMonth" 
             dateClick = {this.handleDateClick}
             plugins ={[dayGridPlugin]} 
             ref = {this.calendarRef}/>
            
        )
    }
   
    handleDateClick= (arg) =>{
        alert("today" + arg);
    }
}
