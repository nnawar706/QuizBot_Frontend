import Layout from "../components/Layout"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

const Questions = () => {
    return (
        <Layout title="QuizBot | Quiz" content="Quiz">
            <section className="flex bg-very-light-green">
                <Sidebar />
                <div className="w-full">
                    <Navbar />

                    <div className="p-6">
                        <div className="bg-white rounded-md p-3 min-h-[700px]">
                            <h1 className="text-dark-green font-bold text-[22px] mb-8">Quiz Question</h1>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Questions