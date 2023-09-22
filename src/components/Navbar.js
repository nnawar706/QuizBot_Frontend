import { BsPlusSquareFill } from "react-icons/bs"
import { MdOutlineLogout } from "react-icons/md";

const Navbar = () => {
    const logout = () => {

    }

    return (
    <section className="sticky top-0 z-30 w-full h-[60px] px-2 py-4 bg-white sm:px-4">
        <div className="mx-auto relative">
            <div className="absolute right-20">
                <BsPlusSquareFill className="h-7 w-7 text-dark-green cursor-pointer" />
            </div>
            <MdOutlineLogout onclick={() => logout} 
            className="absolute right-8 h-7 w-7 text-dark-green cursor-pointer"/>
        </div>
    </section>
)}

export default Navbar