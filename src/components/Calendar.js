import { useEffect, useState } from "react"
import { Calendar } from "primereact/calendar"
import { Timeline } from "primereact/timeline"

const QuizCalendar = ({ quizzes }) => {
    const [dates, setDates] = useState([])
    const [quizEvents, setQuizEvents] = useState([])

    useEffect(() => {
        if (quizzes) {
            const quiz_dates = quizzes.map((quiz) => new Date(quiz.occurring_date))
            setDates(quiz_dates)

            const events = quizzes.map((quiz) => {
                return {
                    date: quiz.occurring_date,
                    mark: quiz.total_marks,
                    color: new Date(quiz.occurred_date) > new Date() ? "#673AB7" : "#607D8B",
                    status: quiz.title
                }
            })
            setQuizEvents(events)
        }
    }, [quizzes])

    return (
        <>
        <Calendar 
            value={dates}
            inline 
            selectionMode="multiple"
        />
        <div className="card flex bg-white ml-7 rounded-md w-full p-8">
            <Timeline 
                value={quizEvents} 
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