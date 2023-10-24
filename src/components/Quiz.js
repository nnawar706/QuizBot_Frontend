import { useState } from "react"
import { Dialog } from "primereact/dialog"
import { Calendar } from "primereact/calendar"

import { useAddNewQuizMutation } from "../backend/sevices/quizzes/quizService"

const Quiz = (props) => {
    const [visible, setVisible] = useState(false)
    const [storeQuiz, { isLoading: addNewQuizLoading } ] = useAddNewQuizMutation()
    const [title, setTitle] = useState('')
    const [occurring_date, setOccurringDate] = useState('2020-01-01')
    const [from_time, setFromTime] = useState('00:00')
    const [to_time, setToTime] = useState("00:00")
    const [total_marks, setTotalMarks] = useState(0)

    const handleQuizSubmit = async(e) => {
        e.preventDefault()

        storeQuiz(props.room_id, {title, occurring_date, from_time, to_time, total_marks})
    }

    return (
    <div className="flex justify-start">
        <button className="p-2 bg-dark-green text-sm text-white 
            rounded-md mb-4"
                type="submit"
            onClick={() => setVisible(true)}
        >
            New Quiz
        </button>

        <div className="card flex justify-content-center">
        <Dialog header="Create New Quiz" visible={visible} style={{ width: '50vw',height: '33vh' }} onHide={() => setVisible(false)}>
            <form className="flex flex-col" onSubmit={handleQuizSubmit}>
                <div className="grid grid-cols-2 gap-2">
                    <input
                        className="p-2 mt-4 rounded border"
                        type="text"
                        name="title"
                        value={title}
                        id="title"
                        placeholder="Title"
                        autoComplete="off"
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    ></input>
                    <input
                        className="p-2 mt-4 rounded border"
                        type="text"
                        name="total_marks"
                        value={total_marks}
                        placeholder="Total Marks"
                        autoComplete="off"
                        onChange={(e) => setTotalMarks(e.target.value)}
                        required
                    ></input>
                </div>
                <div className="grid grid-cols-3 mt-2 gap-2">
                    <input
                        className="p-2 mt-4 rounded border"
                        type="date"
                        name="occurring_date"
                        value={occurring_date}
                        id="occurring_date"
                        placeholder="Date"
                        autoComplete="off"
                        onChange={(e) => setOccurringDate(e.target.value)}
                        required
                    ></input>
                    <input
                        className="p-2 mt-4 rounded border"
                        type="time"
                        name="from_time"
                        value={from_time}
                        id="from_time"
                        placeholder="Date"
                        autoComplete="off"
                        onChange={(e) => setFromTime(e.target.value)}
                        required
                    ></input>
                    <input
                        className="p-2 mt-4 rounded border"
                        type="time"
                        name="to_time"
                        value={to_time}
                        id="to_time"
                        placeholder="Date"
                        autoComplete="off"
                        onChange={(e) => setToTime(e.target.value)}
                        required
                    ></input>
                
                </div>
                <button className="bg-dark-green text-white text-sm font-bold mt-10 py-2 px-4 rounded"
                        disabled={addNewQuizLoading}>
                    {addNewQuizLoading ? "Processing" : "Submit"}
                </button>
            </form>
        </Dialog>
    </div>
    </div>
    )
}

export default Quiz