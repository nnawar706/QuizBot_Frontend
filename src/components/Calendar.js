import { useEffect, useState } from "react"
import { Calendar } from "primereact/calendar"
import { Timeline } from "primereact/timeline"

const QuizCalendar = () => {
    const [date, setDate] = useState([
        new Date("2023-09-25"),
        new Date("2023-09-27"),
    ])

    const events = [
        {
            status: "Ordered",
            date: "15/10/2020 10:30-11:30",
            mark: 10,
            color: "#9C27B0",
        },
        {
            status: "Processing",
            date: "15/10/2020 14:00-14:20",
            mark: 15,
            color: "#673AB7",
        },
        {
            status: "Shipped",
            date: "15/10/2020 16:15-17:00",
            mark: 30,
            color: "#FF9800",
        },
        {
            status: "Delivered",
            date: "16/10/2020 10:00-11:00",
            mark: 20,
            color: "#607D8B",
        },
    ]

    return (
        <>
        <Calendar 
            value={date}
            inline 
            selectionMode="multiple"
        />
        <div className="card flex bg-white ml-7 rounded-md w-full p-8">
            <Timeline 
                value={events} 
                opposite={
                    (item) => <span>{item.status}<br/>
                    <small className="text-[11px]">Marks: {item.mark}</small></span>
                } 
                content={(item) => <small className="text-color-secondary">{item.date}</small>} 
            />
        </div>
        </>
    )
}

export default QuizCalendar