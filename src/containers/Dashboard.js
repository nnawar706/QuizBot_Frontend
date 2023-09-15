import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

const Dashboard = () => (
    <Layout title="QuizBot | Dashboard" content="Admin Dashboard">
        <section className="flex">
            <Sidebar />
            <section className="p-7">
                <h2 className="text-2xl font-semibold">Dashboard Here</h2>
            </section>
        </section>
    </Layout>
);

export default Dashboard;