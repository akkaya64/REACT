import "./04-digital-clock-app-v1.scss"
const DigitalClockAppV1 = () => {
    const date = new Date();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const month = date.getMonth();
    const year = date.getFullYear();
    const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

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

  return (
    <div className="digital-clock-app-v1">
        <div className="time">{hours}:{minutes}</div>
        <div>
            <div className="date">{day} {monthArray[month]} {year}</div>
            <div className="day"> {daysArray[date.getDay()]} {timeOfDay}</div>
        </div>
     
        </div>

  )
}

export default DigitalClockAppV1