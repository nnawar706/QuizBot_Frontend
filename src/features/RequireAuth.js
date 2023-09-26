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
                {/* <h1>Unauthorized :(</h1>
                <span>
                <NavLink to="/login">Login</NavLink> to gain access
                </span> */}
                <nav className="fixed w-full z-30 top-0 text-white">
                    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                        <div className="pl-4 flex items-center">
                            <a className="text-white no-underline hover:font-bold text-2xl lg:text-4xl" href="">
                                <img src={logo} alt="logo" className="border"/>
                                <span>QUIZBOT</span>
                            </a>
                        </div>
                    </div>
                    {/* <hr className="border-b border-gray-100 opacity-25 my-0 py-0"/> */}
                </nav>
                {/* Hero section */}
                <section className="pt-24 h-screen bg-gradient-to-r from-dark-green via-green-200 to-green-300">
                    <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                            <p className="uppercase tracking-loose w-full">
                                What are you doing?
                            </p>
                            <h1 className="my-4 text-5xl font-fold leading-tight">
                                Main hero message to sell yourself.
                            </h1>
                            <p className="leading-normal text-2xl md-8">
                                sub text here
                            </p>
                            <div>
                                <button className="bg-dark-green text-white text-sm font-bold mt-10 py-2 px-4 rounded">
                                    Login
                                </button>
                                <button className="ml-4 bg-dark-green text-white text-sm font-bold mt-10 py-2 px-4 rounded">
                                    Register
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