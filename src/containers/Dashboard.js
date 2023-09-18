import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => (
    <Layout title="QuizBot | Dashboard" content="Admin Dashboard">
        <section className="flex bg-very-light-green">
            <Sidebar/>
            <Navbar/>
            {/* <section className="p-7 ">
                <h2 className="text-2xl font-semibold">Dashboard Here</h2>
            </section> */}
        </section>
    </Layout>
);

export default Dashboard;