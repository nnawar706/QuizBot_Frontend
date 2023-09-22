import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Room from "../components/Room"

const Dashboard = () => (
    <Layout title="QuizBot | Dashboard" content="User Dashboard">
        <section className="flex bg-very-light-green">
            <Sidebar />
            <div className="w-full">
                <Navbar />
                <div className="px-16 py-20 flex flex-wrap">
                    <Room name={"name"}/>
                </div>
            </div>
        </section>
    </Layout>
);

export default Dashboard