import { useParams } from 'react-router-dom'
import { PiStudentFill, PiNotebookDuotone } from "react-icons/pi"
import { BsFillBookmarkStarFill } from "react-icons/bs"

import { useDispatch, useSelector } from "react-redux"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import CardHeader from '../components/HeaderCard'

const RoomDashboard = () => {
    const { id } = useParams()
    const { authInfo } = useSelector((state) => state.auth)

    return (
        <Layout title="QuizBot | Room" content="Room">
            <section className="flex bg-very-light-green">
                <Sidebar />
                <div className="w-full">
                    <Navbar />
                    <div className="p-6">
                        <div className="bg-white rounded-md p-3">
                            <h1 className="text-2xl font-bold mb-3">Welcome to CSE110 Fall'23 Dashboard</h1>
                            <p className="mb-0">No pending quiz this week</p>
                            {/* {authInfo.role === 2 ? (
                                <button className="mt-4 p-2 bg-dark-green text-medium text-white 
                                rounded-md py-2"
                                    type="submit"
                                >
                                    Add New Quiz
                                </button>
                            ) : ''} */}
                        </div>
                        
                        <section class="grid grid-cols-1 gap-8 p-4 lg:grid-cols-2 xl:grid-cols-4">
                            {
                                headings.map((item, index) => {
                                    return (<CardHeader 
                                        index={index} 
                                        title={item.title}
                                        detail={item.detail}
                                        icon={item.icon}
                                    />)
                                })
                            }
                        </section>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

const headings = [
    {
        title: 'Students',
        detail: 10,
        icon:<PiStudentFill/>
    },
    {
        title: 'Quizzes',
        detail: 2,
        icon:<PiNotebookDuotone/>
    },
    {
        title: 'Total Quizzes',
        detail: 10,
        icon:<PiStudentFill/>
    },
    {
        title: 'Star Student',
        detail: "Nafisa Nawer",
        icon:<BsFillBookmarkStarFill/>
    }
]

export default RoomDashboard