import '@fontsource/roboto-flex';
import { NavLink, useNavigate } from 'react-router-dom';
import '../index.css';

const Navbar = () => {

    return (
        <>
            <div className="bg-white w-full flex align-middle font-roboto justify-center border border-gray-300 shadow-md p-7">
                <div>
                    <h3 className="text-3xl font-bold text-start font-roboto">DIGI-<span className="text-blue-600">FYNIX</span></h3>
                </div>
                <div className="ml-40 my-auto">
                    <ul className="flex font-thin text-gray-500 hover:cursor-pointer ">
                        <NavLink to='/'>
                            <li className="mx-5 hover:text-black transition duration-300 ease-in-out transform hover:scale-110 ">Home</li>
                        </NavLink>
                        <NavLink to='/service'>
                            <li className="mx-5 hover:text-black transition duration-300 ease-in-out transform hover:scale-110 ">Our Services</li>
                        </NavLink>
                        <NavLink to='/blog'>
                            <li className="mx-5 hover:text-black transition duration-300 ease-in-out transform hover:scale-110  ">Vist Our Blog</li>
                        </NavLink>
                        <NavLink to='/about'>
                            <li className="mx-5 hover:text-black transition duration-300 ease-in-out transform hover:scale-110  ">About Us</li>
                        </NavLink>
                        <NavLink to='/contact'>
                            <li className="mx-5 hover:text-black transition duration-300 ease-in-out transform hover:scale-110  ">Contact Us</li>
                        </NavLink>
                    </ul>
                </div>

            </div>
        </>
    )

}

export default Navbar;