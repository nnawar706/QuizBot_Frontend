import { useParams } from 'react-router-dom'

import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const RoomDashboard = () => {
    const { id } = useParams()

    return (
        <Layout title="QuizBot | Room" content="Room">
            <section className="flex bg-very-light-green">
                <Sidebar />
                <div className="w-full">
                    <Navbar />
                    <p>room id is {id}</p>
                </div>
            </section>
        </Layout>
    )}

export default RoomDashboard