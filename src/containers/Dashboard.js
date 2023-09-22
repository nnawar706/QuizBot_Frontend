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
// import { setData } from "../features/rooms/roomSlice"

const Dashboard = () => {
    // const dispatch = useDispatch()
    const { data, isFetching } = useGetRoomsQuery({ refetchOnMountOrArgChange: true })
    // const { roomList } = useSelector((state) => state.rooms)

    // useEffect(() => {
    //     if (data) dispatch(setData(data))
    // }, [data, dispatch]);

    console.log(data)
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
                        data.map((item) => {
                            return (
                                <div className="px-16 py-20 flex flex-wrap">
                                    <Room 
                                        id={item?.id} 
                                        title={item?.title} 
                                        detail={item?.detail} 
                                        created_at={item?.created_at}
                                    />
                                </div>
                            )
                        })
                        : <NoContent/>)
                }
            </div>
        </section>
    </Layout>
)}

export default Dashboard