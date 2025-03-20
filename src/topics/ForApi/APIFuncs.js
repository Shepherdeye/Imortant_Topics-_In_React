import axios from "axios";

export const getUsersData = async () => {

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        return data

    } catch (error) {

    }

};

export const axiosDataFetch = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        return response?.data || [];
    } catch (error) {
        console.log(error);

    }
}