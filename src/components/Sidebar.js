import { useState } from "react";
import { useLocation } from "react-router-dom";

import {
    logo,
    profile,
    dashboard,
    performance,
    results,
    quizzes,
    settings,
    students,
} from "../images";

const Sidebar = () => {
    const location = useLocation();

    return (
    <div className="sidebar">
        <div className="logoContainer">
            <img src={logo} alt="logo" className="logo" />
            <h3 className="title">
                <u>QUIZBOT.</u>
            </h3>
        </div>
        <div className="profileContainer">
            {/* <img src={profile} alt="profile" className="profile" /> */}
            <div className="profileContents">
                <p className="name">Hello, John</p>
                <p>john@hello.com</p>
            </div>
        </div>
        <div className="contentsContainer">
            <ul>
                <li className={location.pathname == '/exam-room/:id' ? "active" : ""}>
                    <img src={dashboard} alt="dashboard"/>
                    <a href="/exam-room/:id">Room</a>
                </li>
                <li className={location.pathname == '/exam-room/:id/setting' ? "active" : ""}>
                    <img src={settings} alt="exam-rooms"/>
                    <a href="/exam-room/:id/setting">Settings</a>
                </li>
                <li className={location.pathname == '/exam-room/:id/students' ? "active" : ""}>
                    <img src={students} alt="exam-rooms"/>
                    <a href="/exam-room/:id/students">Students</a>
                </li>
                <li className={location.pathname == '/exam-room/:id/quizzes' ? "active" : ""}>
                    <img src={quizzes} alt="exam-rooms"/>
                    <a href="/exam-room/:id/quizzes">Quizzes</a>
                </li>
                <li className={location.pathname == '/exam-room/:id/results' ? "active" : ""}>
                    <img src={performance} alt="exam-rooms"/>
                    <a href="/exam-room/:id/results">Result</a>
                </li>
            </ul>
        </div>
    </div>
)};

export default Sidebar;
