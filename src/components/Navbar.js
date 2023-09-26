import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Dialog } from 'primereact/dialog'
import { Toast } from "primereact/toast"

import { BsPlusSquareFill } from "react-icons/bs"
import { MdOutlineLogout } from "react-icons/md"

import { useAddNewRoomMutation } from "../backend/sevices/rooms/roomService";
import {userLogin, userLogout} from "../features/auth/authAction"

const Navbar = () => {
    const { authInfo, authToken, error, success } = useSelector(
        (state) => state.auth
    );
    const [storeRoom, { isLoading }] = useAddNewRoomMutation();
    const [visible, setVisible] = useState(false)
    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')
    const toast = useRef(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(!authToken) {
            toast.current.show({
                severity: "success",
                summary: "Success",
                detail: 'Logout Successful',
                life: 1000,
            });

            navigate("/login")
        }

        if (error) {
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: error,
                life: 3000,
            });
        }
    }, [navigate, success, error, authToken]);

    const handleTitleInput = (e) => {
        setTitle(e.target.value)
    }

    const handleDetailInput = (e) => {
        setDetail(e.target.value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        storeRoom({ title, detail })
            .unwrap()
            .then(() => {
                setTitle('')
                setDetail('')
                toast.current.show({
                    severity: "success",
                    summary: "Success",
                    detail: "New room has been added.",
                    life: 3000,
                })
            })
            .catch((err) => {
                toast.current.show({
                    severity: "error",
                    summary: "Error",
                    detail: err?.data?.error,
                    life: 3000,
                })
            })
    };
    
    const logout = () => {
        // dispatch(userLogout({email, password}))
    }

    return (
    <>
    <section className="sticky top-0 z-30 w-full h-[60px] px-2 py-4 bg-white sm:px-4">
        <div className="mx-auto relative">
            <BsPlusSquareFill onClick={() => setVisible(true)} 
            className="absolute right-20 h-7 w-7 text-dark-green cursor-pointer" />
            
            <MdOutlineLogout onclick={() => logout} 
            className="absolute right-8 h-7 w-7 text-dark-green cursor-pointer"/>
        </div>
    </section>
    <div className="card flex justify-content-center">
        <Dialog header="Create New Room" visible={visible} style={{ width: '50vw',height: '33vh' }} onHide={() => setVisible(false)}>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <input
                    className="p-2 mt-4 rounded border"
                    type="text"
                    name="title"
                    value={title}
                    id="title"
                    placeholder="Title"
                    autoComplete="off"
                    onChange={handleTitleInput}
                    required
                ></input>
                <input
                    className="p-2 mt-4 rounded border"
                    type="text"
                    name="detail"
                    value={detail}
                    id="detail"
                    placeholder="Detail"
                    autoComplete="off"
                    onChange={handleDetailInput}
                    required
                ></input>
                <button className="bg-dark-green text-white text-sm font-bold mt-10 py-2 px-4 rounded">
                    Submit
                </button>
            </form>
        </Dialog>
    </div>
    <Toast ref={toast} />
    </>
)}

export default Navbar
