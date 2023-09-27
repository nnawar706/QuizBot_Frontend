// import { useState, useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { useLocation, Link } from "react-router-dom"

import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Room from "../components/Room"
import { Loading } from "../components/Loader"
import { NoContent } from "../components/NoContent"
import { useGetRoomsQuery } from "../backend/sevices/rooms/roomService"

const Dashboard = () => {
    const { data, isFetching } = useGetRoomsQuery({ refetchOnMountOrArgChange: true, force: true })

    return (
        <Layout title="QuizBot | Dashboard" content="User Dashboard">
            <section className="flex bg-very-light-green">
                <Sidebar />
                <div className="w-full">
                    <Navbar />
                    {
                        isFetching ? <Loading/> :
                            (
                                data ?
                                    <div className="px-16 py-20 flex flex-wrap">
                                        {data['data'].map((item) => {
                                            return (

                                                <Room
                                                    id={item?.id}
                                                    title={item?.title}
                                                    detail={item?.detail}
                                                    created_at={item?.created_at}
                                                />
                                            )
                                        })}
                                    </div>
                                    : <NoContent/>)
                    }
                </div>
            </section>
        </Layout>
    )}

export default Dashboard