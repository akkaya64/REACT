import "./06-digital-clock-app-v2.scss"
import moment from "moment"
// import "moment/locale/tr"

const DigitalClockAppV2 = (props) => {
    const date = moment()./* locale("tr"). */format("DD MMMM YYYY")
    const hours = moment().format("HH")
    const minutes = moment().format("mm")
    const days = moment().format("dddd")

    let timeOfDay;
    
    if (hours >= 6 && hours < 12) {
        timeOfDay = "Morning";
    } else if (hours === 12) {
        timeOfDay = "Noon";
    } else if (hours > 12 && hours < 18) {
        timeOfDay = "Afternoon";
    } else if (hours >= 18 && hours < 21) {
        timeOfDay = "Evening";
    } else {
        timeOfDay = "Night";
    }

    const clockStyle = {
        color: props.color,
        backgroundColor: props.backgroundColor
    }

  return (
    <div style={clockStyle} className="digital-clock-app-v2">
        <div className="time">{hours}:{minutes}</div>
        <div>
            <div className="date">{date}</div>
            <div className="day"> {days} {timeOfDay}</div>
        </div>
     
        </div>

  )
}

export default DigitalClockAppV2