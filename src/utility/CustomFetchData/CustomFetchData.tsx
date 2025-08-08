import axios from "axios";
import { toast } from "react-toastify";
interface AddDataProps {
    apiurl: string,
    body: {}
}

export async function addData({ apiurl, body }: AddDataProps) {
    try {
        const response = await axios.post(apiurl, body);
        toast.success(response?.data?.message || "Data added successfully");
        console.log("Response:", response?.data?.message);
        return response.data;
    } catch (error) {
        console.error("Error adding data:", error);
        toast.error("Failed to add data");
        throw error;
    }
}
export async function PostData({ apiurl, body }: AddDataProps) {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.post(apiurl, body, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        toast.success(response?.data?.message || "Data posted successfully");
        console.log("Response:", response?.data?.message);
        return response.data;
    } catch (error) {
        console.error("Error posting data:", error);
        toast.error("Failed to post data");
        throw error;
    }
}

export async function getData({ apiurl }: { apiurl: string }) {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.get(apiurl, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch data");
        throw error;
    }
}
