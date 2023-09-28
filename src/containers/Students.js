import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Toast } from "primereact/toast"
import { useDispatch, useSelector } from "react-redux"

import Layout from "../components/Layout"
import Sidebar from '../components/Sidebar'
import Navbar from "../components/Navbar"
import InviteStudents from '../components/InviteStudents'

const Students = () => {
    const { id } = useParams()
    const { authInfo } = useSelector((state) => state.auth)

    return (
        <Layout title="QuizBot | Room" content="Room">
            <section className="flex bg-very-light-green">
                <Sidebar />
                <div className="w-full">
                    <Navbar />
                    <div className="p-6">
                        <div className="flex justify-between">
                            {authInfo.role === 2 ? <InviteStudents/> : ''}
                        </div>
                        <div className="card mt-6">
                            <DataTable/>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Students