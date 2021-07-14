import axios from "axios";

export const getUserImages = async (file_path) => {

    const requestBody = {
        "file_path": file_path,
    };

    const response = await axios({
        url: process.env.REACT_APP_API_URL + `/images`,
        method: "DELETE",
        data: requestBody,
    });

    if ((response.status !== 200) & (response.status !== 201)) {
        if (response.status === 401) {
            throw new Error(`Error! Unauthorized(401)`);
        } else {
            throw new Error(`Error! Status ${response.status}`);
        }
    }

    return response.data;
};