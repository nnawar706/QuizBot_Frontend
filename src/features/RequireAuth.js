import { NavLink, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

import { logo, homeBg } from "../images"

const RequireAuth = () => {
    const { authToken } = useSelector(
        (state) => state.auth
    );

    if(!authToken)
    {
        return (
            <div className="leading-normal text-white gradient">
                <nav className="fixed w-full z-30 top-5 text-white">
                    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                        <div className="pl-4 flex items-center">
                            <a className="inline-flex text-white no-underline hover:font-bold text-2xl lg:text-4xl" href="">
                                <img src={logo} alt="logo" className="h-[68px]"/>
                                <span className="ml-2 mt-5 font-medium">QUIZBOT.</span>
                            </a>
                        </div>
                    </div>
                </nav>
                {/* Hero section */}
                <section className="pt-24 h-screen bg-gradient-to-r from-dark-green via-green-200 to-green-300">
                    <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                            <h3 className="uppercase text-2xl tracking-loose w-full my-4">
                                QuizBot: Unleash your inner quiz whiz!
                            </h3>
                            <p className="leading-normal md-8">
                                Your go-to platform for interactive quizzes that engage, challenge, and enhance your learning experience
                            </p>
                            <div>
                                <button className="bg-dark-green text-white text-sm font-bold mt-10 py-2 px-4 rounded">
                                    <a href="/login">Login</a>
                                </button>
                                <button className="ml-4 bg-dark-green text-white text-sm font-bold mt-10 py-2 px-4 rounded">
                                    <a href="/register">Register</a>
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-3/5 py-6 text-center">
                            <img className="w-full md:w-4/5 z-50" src={homeBg} alt="hero"/>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    return <Outlet/>
}

export default RequireAuth;