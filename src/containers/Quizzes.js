import { useState, useRef } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { TieredMenu } from 'primereact/tieredmenu'

import { ImMenu3 } from "react-icons/im"

import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { Loading } from "../components/Loader"

const Quizzes = () => {
    const [quizzes, setQuizzes] = useState([{'title':'quiz1','occurring_date':'2013-01-01','time':'09:00 - 10:00','total_mark':10}])
    const [selectedRow, setSelectedRow] = useState(null)
    const overlayRef = useRef(null)

    const items = [
        {
            label: "File",
            icon: "pi pi-fw pi-file"
        },
        {
            label: "Edit",
            icon: "pi pi-fw pi-pencil"
        },
        {
            label: "Users",
            icon: "pi pi-fw pi-user",
        }
    ]

    const showMenu = (event, rowData) => {
        setSelectedRow(rowData)
        overlayRef.current.toggle(event)
        console.log(rowData)
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
                            
                            <DataTable value={quizzes} size='small' tableStyle={{ minWidth: '50rem' }}>
                                <Column field="title" header="Title" sortable style={{ width: '25%' }}></Column>
                                <Column field="occurring_date" header="Date" sortable style={{ width: '20%' }}></Column>
                                <Column field="time" header="Time" sortable style={{ width: '20%' }}></Column>
                                <Column field="total_mark" header="Total Marks" sortable style={{ width: '15%' }}></Column>
                                <Column field="status" header="Status" sortable style={{ width: '15%' }}></Column>
                                <Column header="Actions" style={{ width: '10%' }} body={renderActionsColumn} />
                            </DataTable>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Quizzes