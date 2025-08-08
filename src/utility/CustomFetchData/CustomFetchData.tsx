import axios from "axios";
import { toast } from "react-toastify";
interface AddDataProps {
    apiurl: string,
    body: {}
}

export default async function addData({ apiurl, body }: AddDataProps) {
    try {
        const response = await axios.post(apiurl, body);
        toast.success(response?.data?.message || "Data added successfully");
        return response.data;
    } catch (error) {
        console.error("Error adding data:", error);
        toast.error("Failed to add data");
        throw error;
    }
}