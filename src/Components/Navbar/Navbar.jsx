import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate(); // Hook for programmatic navigation
    const handleSelectChange = (event) => {
        navigate(event.target.value); // Navigate to selected route
    };

    return (
        <nav className="bg-gray-900 text-yellow-300 w-full text-center p-3 font-bold flex items-center justify-between">
            <div className="w-2/4 md:w-1/4 text-lg md:text-3xl">
                <Link to="/">React Reverse</Link>
            </div>
            <ul className="w-2/4 md:w-2/5 lg:w-  flex justify-around items-center text-sm md:text-xl">
                <Link className="text-yellow-700 hover:text-yellow-300" to="/">Home</Link>

                {/* Corrected Select Dropdown */}
                <select
                    onChange={handleSelectChange}
                    className="text-yellow-700 w-max hover:text-yellow-300 border-none p-1 rounded bg-gray-900 outline-none"
                >
                    <option value="/context">Context Store</option>
                    <option value="/budget">Context Budget</option>
                    <option value="/hoc">HOC</option>
                    <option value="/states">States</option>
                    <option value="/echo">Echo</option>
                    <option value="/custom">Custom Hooks</option>
                    <option value="/apicall">Api Calls</option>
                </select>

            </ul>
        </nav>
    );
};

export default Navbar;
