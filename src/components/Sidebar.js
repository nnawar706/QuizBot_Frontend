import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

import { BsFillCaretLeftSquareFill, BsBarChartLineFill } from "react-icons/bs";
import { MdDashboardCustomize, MdOutlineSettings, MdPeopleAlt, MdOutlineLibraryBooks } from "react-icons/md";

import {logo, profile} from "../images";
// import { selectAuthUser, selectAuthToken } from "../features/authSlice";

const Sidebar = () => {
    const location = useLocation();
    const [minimizeSidebar, setMinimizeSidebar] = useState(false);
    // const user = useSelector(selectAuthUser);
    // const token = useSelector(selectAuthToken);

    const menus = [
        {
            title: "Dashboard", icon: <MdDashboardCustomize/>, location: "/exam-room/:id"
        },
        {
            title: "Settings", icon: <MdOutlineSettings/>, location: "/exam-room/:id/setting"
        },
        {
            title: "Students", icon: <MdPeopleAlt/>, location: "/exam-room/:id/students"
        },
        {
            title: "Quizzes", icon: <MdOutlineLibraryBooks/>, location: "/exam-room/:id/quizzes"
        },
        {
            title: "Results", icon: <BsBarChartLineFill/>, location: "/exam-room/:id/results"
        }
    ]

    const isActive = (path) => {
        return location.pathname === path
    }

    return (
    <div className={`bg-white h-screen relative p-5 pt-8 ${minimizeSidebar ? "w-20" : "w-72"} duration-500`}>
        <BsFillCaretLeftSquareFill 
        className={`bg-white text-dark-green text-3xl rounded-full absolute 
        -right-4 top-20 cursor-pointer ${minimizeSidebar && "rotate-180"}`} 
        onClick = {() => setMinimizeSidebar(!minimizeSidebar)}/>
        <div className="inline-flex">
            <img src={logo} alt="logo" className={`cursor-pointer block float-left ${minimizeSidebar && "rotate-[360deg]" } duration-500`} />
            <h3 className={`ml-2 mt-5 origin-left font-medium text-[18px]  underline underline-offset-8 text-dark-green
            ${minimizeSidebar && "scale-0"} duration-500`}>
                QUIZBOT.
            </h3>
        </div>
        <div className="inline-flex mt-4">
            <img src={profile} alt="profile" className={`w-10 h-10 float-left`} />
            <div className={`ml-2 origin-left ${minimizeSidebar && "scale-0"} duration-500`}>
                <p>Hello, John</p>
                <p className="mb-2">john@hello.com</p>
            </div>
        </div>
        <hr/>
        <ul className="mt-3">
            {menus.map((menu, index) => (
                <li key={index} 
                className={`text-dark-grey text-sm flex items-center 
                rounded-md mt-2 cursor-pointer p-2 ${isActive(menu.location) ? "bg-very-light-green" : "hover:bg-light-grey"}`}>
                    <Link to={menu.location}>
                        <span className="text-2xl block float-left">{menu.icon}</span>
                        <span className={`text-base font-medium ml-4 duration-500 ${minimizeSidebar && "hidden"}`}>{menu.title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
)};

export default Sidebar;
