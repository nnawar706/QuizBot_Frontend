import { useState, useEffect, useRef } from 'react'
import { useParams } from "react-router-dom"
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { TieredMenu } from 'primereact/tieredmenu'
import { Tag } from "primereact/tag"

import { ImMenu3 } from "react-icons/im"

import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { Loading } from "../components/Loader"
import { NoContent } from '../components/NoContent'
import { useGetQuizzesQuery } from '../backend/sevices/quizzes/quizService'

const Quizzes = () => {
    const { id } = useParams()
    const { data, isFetching } = useGetQuizzesQuery(id, { refetchOnMountOrArgChange: true, force: true })

    const [quizzes, setQuizzes] = useState([])
    const [selectedRow, setSelectedRow] = useState(null)
    const overlayRef = useRef(null)

    useEffect(() => {
        if (data.data)
        {
            setQuizzes(data.data)
        }
    },[data])

    const items = [
        {
            label: "Update",
            icon: "pi pi-fw pi-file"
        },
        {
            label: "Create Question",
            icon: "pi pi-fw pi-pencil"
        },
        {
            label: "Remove",
            icon: "pi pi-fw pi-user",
        }
    ]

    const showMenu = (event, rowData) => {
        setSelectedRow(rowData)
        overlayRef.current.toggle(event)
    }

    const renderQuizStatus = (rowData) => {
        const curDate = new Date().toISOString().slice(0, 10)

        return <Tag severity={rowData.occurring_date < curDate ? "info" : "warning"}
            value={rowData.occurring_date < curDate ? "Completed" : "Due"}></Tag>
    }

    const renderActionsColumn = (rowData) => {
        return (
            <div className="card flex justify-content-center">
                <TieredMenu model={items} popup ref={overlayRef} breakpoint="767px"/>
                <button onClick={(e) => showMenu(e, rowData)}>
                    <ImMenu3 className="text-dark-green text-[25px]"/>
                </button>
            </div>
        )
    }

    return (
        <Layout title="QuizBot | Quiz" content="Quiz">
            <section className="flex bg-very-light-green">
                <Sidebar />
                <div className="w-full">
                    <Navbar />

                    <div className="p-6">
                        <div className="bg-white rounded-md p-3 min-h-[380px]">
                            
                            <h1 className="text-dark-green font-bold text-[22px] mb-8">Quizzes</h1>
                            
                            {isFetching ? <Loading/> : (
                                !data ? <NoContent/> : (
                                    <DataTable value={quizzes} size='small' tableStyle={{ minWidth: '50rem' }}>
                                        <Column field="title" header="Title" sortable style={{ width: '25%' }}></Column>
                                        <Column field="occurring_date" header="Date" sortable style={{ width: '20%' }}></Column>
                                        <Column field="from_time" header="Time" sortable style={{ width: '20%' }}></Column>
                                        <Column field="total_marks" header="Total Marks" sortable style={{ width: '15%' }}></Column>
                                        <Column field="status" header="Status" sortable style={{ width: '15%' }} body={renderQuizStatus}></Column>
                                        <Column header="Actions" style={{ width: '10%' }} body={renderActionsColumn} />
                                    </DataTable>
                                ))}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Quizzes