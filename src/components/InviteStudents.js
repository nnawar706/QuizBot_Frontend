import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { OrderList } from "primereact/orderlist"
import { Dialog } from "primereact/dialog"
import { useDispatch, useSelector } from "react-redux"
import { TiDelete } from "react-icons/ti"

import { useSendInvitationMutation } from "../backend/sevices/rooms/roomService"

const InviteStudents = () => {
    const { id } = useParams()
    const [email, setEmail] = useState()
    const [visible, setVisible] = useState(true)
    const [emails, setEmails] = useState([])
    
    const removeEmail = (item) => {
        console.log(item)
    }

    useEffect(() => {
        console.log(emails)
    }, [emails])

    const selectedEmail = (item) => {
        return (
            <div className="flex flex-wrap p-2 align-items-center gap-2">
                <div className="flex-1 flex flex-column gap-2 xl:mr-8">
                    <span>{item}</span>
                </div>
                <TiDelete className="font-bold text-900 text-[26px] text-dark-green" 
                onClick={(e) => removeEmail(e.value)}/>
            </div>
        )
    }

    return (
        <>
            <button 
            className="ml-auto p-2 bg-dark-green text-medium text-white 
            rounded-md py-2"
            onClick={() => setVisible(true)}
            >
                Invite Students
            </button>

            <div className="card flex justify-content-center">
                <Dialog header="Invite Students Via Email" visible={visible} 
                style={{ width: '50vw',height: '80vh'}} 
                onHide={() => setVisible(false)}>
                    <div className="flex justify-center mt-6">    
                        <input
                            className="p-2 rounded-md border"
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        ></input>
                        <button className="px-2 bg-dark-green text-white rounded-md ml-1"
                        onClick={(e) => {
                            e.preventDefault()
                            setEmails([...emails, email])
                            setEmail('')
                        }}>Add</button>
                    </div>
                    <div className="mt-4">
                        <OrderList 
                        value={emails}
                        showOrderControls={false}
                        itemTemplate={selectedEmail} 
                        header="Selected Student" 
                        />
                    </div>
                </Dialog>
            </div>
        </>
    )
}

export default InviteStudents