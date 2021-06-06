import {headers} from "./constants";
import {URL_POSTCOINS} from "./constants";

async function postMoreCoins(amount) {
    try {
        const response = await fetch(URL_POSTCOINS, { method: "POST", headers, body: JSON.stringify({"amount": amount}) });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error: ", error);
    }

}

export default postMoreCoins;