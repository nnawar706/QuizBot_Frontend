import { BsPlusSquareFill } from "react-icons/bs"

const Navbar = () => (
    <section className="sticky top-0 z-30 w-full h-[60px] px-2 py-4 bg-white sm:px-4">
        <div className="mx-auto relative">
            <div className="absolute right-1">
                <BsPlusSquareFill className="h-7 w-7  text-dark-green" />
            </div>
        </div>
    </section>
)

export default Navbar