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
            <ul className="w-2/4 md:w-1/4 flex justify-around items-center text-sm md:text-xl">
                <Link className="text-yellow-700 hover:text-yellow-300" to="/">Home</Link>

                {/* Corrected Select Dropdown */}
                <select
                    onChange={handleSelectChange}
                    className="bg-gray-800 text-yellow-300 border-none p-1 rounded"
                >
                    <option value="/context">Context Store</option>
                    <option value="/budget">Context Budget</option>
                </select>

                <Link className="text-yellow-700 hover:text-yellow-300" to="/">HOC</Link>
            </ul>
        </nav>
    );
};

export default Navbar;
