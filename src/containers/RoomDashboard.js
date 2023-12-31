import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import ReactEcharts from "echarts-for-react"
import { PiStudentFill, PiNotebookDuotone } from "react-icons/pi"
import { BsFillBookmarkStarFill } from "react-icons/bs"

import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { Loading } from "../components/Loader"
import CardHeader from '../components/HeaderCard'
import QuizCalendar from '../components/Calendar'
import Quote from '../components/Quote'
import { useGetRoomDetailsQuery } from '../backend/sevices/rooms/roomService'
import { NoContent } from '../components/NoContent'

const RoomDashboard = () => {
    const { id } = useParams()
    const [headings, setHeadings] = useState([])
    const { data, isFetching } = useGetRoomDetailsQuery(id)

    useEffect(() => {
        if (data && data.data) {
            const heading_items = [
                {
                    title: "Students",
                    detail: data?.data?.students?.length,
                    icon: <PiStudentFill />,
                },
                {
                    title: "Quizzes",
                    detail: data?.data?.quizzes?.length,
                    icon: <PiNotebookDuotone />,
                },
                {
                    title: "Total Quizzes",
                    detail: 10,
                    icon: <PiStudentFill />,
                },
                {
                    title: "Star Student",
                    detail: "Nafisa Nawer",
                    icon: <BsFillBookmarkStarFill />,
                },
            ]

            setHeadings(heading_items)
        }
    }, [data])

    return (
        <Layout title="QuizBot | Room" content="Room">
            <section className="flex bg-very-light-green">
                <Sidebar />
                <div className="w-full">
                    <Navbar />
                    {isFetching || headings.length === 0 ? <Loading/> : (
                        data.data ? 
                    <div className="p-6">
                        <div className="bg-white rounded-md p-3">
                            <h1 className="text-2xl font-bold mb-3 text-gray-600">Welcome to {data.data?.title}</h1>
                            <p className="mb-0 text-gray-600">Woohhoo! No pending quiz this week</p>
                            <button className="mt-4 p-2 bg-dark-green text-medium text-white 
                                rounded-md py-2"
                                    type="submit"
                                >
                                    Upgrade
                            </button>
                        </div>
                        
                        <section className="grid grid-cols-2 gap-8 p-4 lg:grid-cols-2 xl:grid-cols-4">
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

                        <section className="grid grid-cols-2 gap-7">
                            <div className="bg-white p-4 rounded-md">
                                <ReactEcharts option={option} />
                            </div>
                            <div className="card flex justify-content-center">
                                <QuizCalendar quizzes = {data.data?.quizzes}/>
                            </div>
                        </section>

                        <section className="grid grid-cols-1">
                            <Quote/>
                        </section>
                    </div> : <NoContent/>
                    )}
                </div>
            </section>
        </Layout>
    )
}

const option = {
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "cross",
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            magicType: {
                show: true,
                type: ['line','bar']
            },
            restore: {
                show: true,
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['Evaporation', 'Precipitation', 'Temperature']
    },
    xAxis: [
        {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: "value",
            name: "Precipitation",
            min: 0,
            max: 100,
            interval: 50,
            axisLabel: {
                formatter: '{value}'
            }
        },
        // {
        //     type: "value",
        //     name: "Temperature",
        //     min: 0,
        //     max: 25,
        //     interval: 5,
        //     axisLabel: {
        //         formatter: '{value}'
        //     }
        // },
    ],
    series: [
    {
        name: 'Evaporation',
        type: 'bar',
        tooltip: {
            valueFormatter: function (value) {
            return value
            }
        },
        data: [
            20, 49, 17, 23.2, 25.6, 26.7, 35.6, 12.2, 32.6, 20.0, 16.4, 13.3
        ]
        },
        {
        name: 'Precipitation',
        type: 'bar',
        tooltip: {
            valueFormatter: function (value) {
            return value
            }
        },
        data: [
            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
        ]
        },
        {
        name: 'Temperature',
        type: 'line',
        // yAxisIndex: 1,
        tooltip: {
            valueFormatter: function (value) {
            return value
            }
        },
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
}

export default RoomDashboard