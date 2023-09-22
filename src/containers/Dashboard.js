import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, Link } from "react-router-dom"

import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Room from "../components/Room"
import { Loading } from "../components/Loader"
import { useGetRoomsQuery } from "../backend/sevices/rooms/roomService"

const Dashboard = () => {
    const dispatch = useDispatch()
    const { data, isFetching } = useGetRoomsQuery({ refetchOnMountOrArgChange: true })

    return (
    <Layout title="QuizBot | Dashboard" content="User Dashboard">
        <section className="flex bg-very-light-green">
            <Sidebar />
            <div className="w-full">
                <Navbar />
                {
                    !isFetching ? <Loading/> :
                    <div className="px-16 py-20 flex flex-wrap">
                        <Room name={"name"}/>
                    </div>
                }
            </div>
        </section>
    </Layout>
)}

export default Dashboard