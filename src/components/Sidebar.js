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
                <li className="active">
                    <img src={dashboard} alt="dashboard"/>
                    <a href="/">Dashboard</a>
                </li>
                <li className="active">
                    <img src={settings} alt="exam-rooms"/>
                    <a href="/">Settings</a>
                </li>
                <li>
                    <img src={students} alt="exam-rooms"/>
                    <a href="/">Students</a>
                </li>
                <li>
                    <img src={quizzes} alt="exam-rooms"/>
                    <a href="/">Quizzes</a>
                </li>
                <li>
                    <img src={performance} alt="exam-rooms"/>
                    <a href="/">Result</a>
                </li>
                {/* <li className="active">
                    <img src={performance} alt="exam-rooms"/>
                    <a href="/">Performance</a>
                </li> */}
            </ul>
        </div>
    </section>
);

export default Sidebar;
