import { useEffect, useState } from "react"
import { Calendar } from "primereact/calendar"

const QuizCalendar = () => {
    const [date, setDate] = useState([
        new Date("2023-09-25"),
        new Date("2023-09-27"),
    ])

    return (
        <Calendar 
            value={date}
            inline 
            selectionMode="multiple"
        />
    )
}

export default QuizCalendar