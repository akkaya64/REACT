import { useEffect, useState } from "react"
import "./18-digital-clock-app-v3.scss"
import moment from "moment"
// import "moment/locale/tr"

const DigitalClockAppV3 = (props) => {
    const [date, setDate] = useState(moment())
    const ddate = moment()./* locale("tr"). */format("DD MMMM YYYY")
    const days = date.format("dddd")
    const hours = moment().format("HH")
    const minutes = moment().format("mm")
    const seconds = moment().format("ss")

    let timeOfDay;
    
     if (hours >= 6 && hours < 12) timeOfDay = "Morning";
     else if (hours === 12) timeOfDay = "Noon";
     else if (hours > 12 && hours < 18) timeOfDay = "Afternoon";
     else if (hours >= 18 && hours < 21) timeOfDay = "Evening";
     else timeOfDay = "Night";
    

    const clockStyle = {
        color: props.color,
        backgroundColor: props.backgroundColor
    }

    useEffect(() => {
        const timer = setInterval(() => {setDate(moment());}, 1000);
        return () => {
            clearInterval(timer);
        }
    })

  return (
    <div style={clockStyle} className="digital-clock-app-v3 my-5">
        <div className="time">
            {hours}
            <span style={{
                //color: seconds %2 === 0 ? "darkcyan" : "transparent",
                //opacity: seconds %2 === 0 ? 1 : 0
                visibility: seconds %2 === 0 ? "hidden" : "visible"
            }}>:</span>
            {minutes}</div>
        <div>
            <div className="date">{ddate}</div>
            <div className="day"> {days} {timeOfDay}</div>
        </div>
        
        </div>

  )
}

export default DigitalClockAppV3