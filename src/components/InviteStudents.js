import { useState, useEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import { OrderList } from "primereact/orderlist"
import { Dialog } from "primereact/dialog"
import { Toast } from "primereact/toast"
import { useDispatch, useSelector } from "react-redux"
import { TiDelete } from "react-icons/ti"

import { useSendInvitationMutation } from "../backend/sevices/rooms/roomService"

const InviteStudents = () => {
    const { id } = useParams()
    const toast = useRef(null)
    const [email, setEmail] = useState()
    const [visible, setVisible] = useState(false)
    const [emails, setEmails] = useState([])
    const [sendInvitation, { isLoading: sendInvitationLoading } ] = useSendInvitationMutation()    
    const addEmail = (e) => {
        e.preventDefault()
        if (!emails.includes(email)) setEmails([...emails, email])
        setEmail("")
    }

    useEffect(() => {
        console.log(emails)
    }, [emails])

    const removeEmail = (item) => {
        const updatedEmails = emails.filter((value) => value !== item)
        setEmails(updatedEmails)
    }

    const handleSendInvitation = async(e) => {
        e.preventDefault()
        
        sendInvitation({ emails, id })
            .unwrap()
            .then(() => {
                setEmail('')
                setEmails([])
                setVisible(false)
                toast.current.show({
                    severity: "success",
                    summary: "Success",
                    detail: "Invitations Sent.",
                    life: 3000,
                })
            })
            .catch((err) => {
                setVisible(false)
                toast.current.show({
                    severity: "error",
                    summary: "Error",
                    detail: err?.data?.error,
                    life: 3000,
                })
            })
    }

    const selectedEmail = (item) => {
        return (
            <div className="flex flex-wrap p-2 align-items-center gap-2">
                <div className="flex-1 flex flex-column gap-2 xl:mr-8">
                    <span>{item}</span>
                </div>
                <TiDelete className="font-bold text-900 text-[26px] text-dark-green" 
                onClick={() => removeEmail(item)}/>
            </div>
        )
    }

    return (
        <>
            <Toast ref={toast} />
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
                        disabled={sendInvitationLoading}
                        onClick={(e) => addEmail(e)}>Add</button>
                    </div>
                    <div className="mt-4">
                        <OrderList 
                        value={emails}
                        showOrderControls={false}
                        itemTemplate={selectedEmail} 
                        header="Selected Student" 
                        />
                    </div>

                    <div className="mt-4 flex justify-center">
                        <button 
                        className="p-2 bg-dark-green text-white rounded-md text-md font-semibold"
                        onClick={handleSendInvitation}
                        disabled={sendInvitationLoading}
                        >
                            {sendInvitationLoading ? "Processing" : "Send Invitation"}
                        </button>
                    </div>
                </Dialog>
            </div>
        </>
    )
}

export default InviteStudents