import React from "react";
import AddCoins from "../components/addCoins";
import { userContext } from '../context/userContext';
import coin from "../assets/coin.svg";

function Header() {
    const [modal, setModal] = React.useState(false);
    const { users, points, history, setHistory } = React.useContext(userContext);

    return (
        <header className="header">
            <section className="userNameInfo">
                <h6 className="userName"> {users.name} </h6>
                <button
                    className="button-headerCoins"
                    onClick = {() => setModal(true)} > 
                    {points}
                    <img src={coin} alt="coin"/>
                </button>
                <button className="switch-btn" onClick={() => setHistory(true)} style={{display: history ? "none" : "block"}}> 
                    Redeems
                </button>
                <button className="switch-btn" onClick={() => setHistory(false)} style={{display: history ? "block" : "none"}}> 
                    Store
                </button>               
            </section>

            {modal ? 
            <AddCoins setModal={setModal}/> : null}
            <section className="container-header">
                <h6 className="title-header" style={{display: history ? "none" : "block"}}> Electronics </h6>
                <h6 className="title-header" style={{display: history ? "block" : "none"}}> History </h6>
            </section>
        </header>
    )
}

export default Header;