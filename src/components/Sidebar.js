import {
    logo,
    profile,
    dashboard,
    performance,
    results,
    rooms,
    settings,
    students,
} from "../images";

const Sidebar = () => (
    <section className="sidebar">
        <div className="logoContainer">
            <img src={logo} alt="logo" className="logo" />
            <h3 className="title">
                <u>QUIZBOT.</u>
            </h3>
        </div>
        <div className="burgerContainer">
            <div className="burgerTrigger">
                <div className="burgerMenu"></div>
            </div>
        </div>
        <div className="profileContainer">
            <img src={profile} alt="profile" className="profile" />
            <div className="profileContents">
                <p className="name">Hello, John</p>
                <p>john@hello.com</p>
            </div>
        </div>
        <div className="contentsContainer">
            <ul>
                <li>
                    <img src={dashboard} alt="dashboard"/>
                    <a href="/">Dashboard</a>
                </li>
                <li>
                    <img src={rooms} alt="exam-rooms"/>
                    <a href="/">Exam Rooms</a>
                </li>
                <li>
                    <img src={students} alt="exam-rooms"/>
                    <a href="/">Students</a>
                </li>
                <li>
                    <img src={rooms} alt="exam-rooms"/>
                    <a href="/">Settings</a>
                </li>
            </ul>
        </div>
    </section>
);

export default Sidebar;
