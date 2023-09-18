import { BsPlusSquareFill } from "react-icons/bs";

const Navbar = () => (
    <>
        <section className="sticky top-0 z-30 w-full h-20 px-2 py-4 bg-white sm:px-4">
            <div className="flex items-center justify-end mx-auto max-w-7xl">
                <div className="flex items-center space-x-1">
                    <ul className="hidden space-x-2 md:inline-flex">
                        <li>
                            <BsPlusSquareFill className="h-7 w-7 text-dark-green mt-2"/>
                            <BsPlusSquareFill className="h-7 w-7 text-dark-green mt-2"/>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </>
);

export default Navbar;