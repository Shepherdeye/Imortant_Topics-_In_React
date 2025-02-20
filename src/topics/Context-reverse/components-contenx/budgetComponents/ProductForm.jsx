import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useStore } from "../../context/contextData";
import * as actions from "../../context/Actions"
const ProductForm = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const { dispatch } = useStore();

    const handleAddProduct = () => {
        if (!name || !price) return alert("Please fill in both fields!");

        const newProduct = {
            id: uuidv4(),
            exName: name,
            cost: parseInt(price),
        };

        dispatch({ type: actions.BUDGET_ADD_EXPENSIS, payload: newProduct })
        setName("");
        setPrice("");
    };

    return (

        <div>
            {/* Form */}
            < div className="bg-white p-6 shadow-lg rounded-2xl w-80 border border-gray-200 my-5" >
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                    Add Product
                </h2>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-3"
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-3"
                />
                <button
                    onClick={handleAddProduct}
                    className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition cursor-pointer"
                >
                    Add Product
                </button>
            </div >
        </div>


    );
};

export default ProductForm;
