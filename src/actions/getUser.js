import {headers} from "./constants";
import{URL_GETUSER} from "./constants";

async function GetUser() {
    try {
        const response = await fetch(URL_GETUSER, { method: "GET", headers });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error: ", error);
    }
}

export default GetUser;