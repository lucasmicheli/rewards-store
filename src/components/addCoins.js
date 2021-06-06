import React from "react";
import { THOUSAND, FIVETHOUSAND, SEVENTHOUSAND } from "../actions/constants";
import postMoreCoins from "../actions/postMorePoints";
import {userContext} from "../context/userContext";
import coin from "../assets/coin.svg";

function AddCoins(props) {
    const [show, setShow] = React.useState(false);
    const { points, setPoints } = React.useContext(userContext);

    React.useEffect(() => {
        if(show) 
            setTimeout(() => { setShow(false) }, 2000)
    },[show]);

    const handleClick = (number) =>{
        postMoreCoins(number).then(response => { setPoints(points + number); setShow(true) })
    };
    
    return (
        <div className="modal-screen">
            <div className="successAddPointsDiv">
                {show && 
                <div className={ "successEnabled successAddPoints" }> 
                    <h6 className="success-p"> Points added successfully </h6>
                </div>
                }
            </div>
            <section className="addCoins">
                <h4 className="title-addCoins"> Add more coins </h4>
                <button className="button-addCoins one" onClick={() => handleClick(THOUSAND)}>
                    <img src={coin} alt={THOUSAND} />
                    {THOUSAND}
                </button>
                <button className="button-addCoins two" onClick={() => handleClick(FIVETHOUSAND)}>
                    <img src={coin} alt={FIVETHOUSAND} />
                    {FIVETHOUSAND}
                </button>
                <button className="button-addCoins three" onClick={() => handleClick(SEVENTHOUSAND)}>
                    <img src={coin} alt={SEVENTHOUSAND} />
                    {SEVENTHOUSAND}
                </button>
                <button className="close" onClick={() => props.setModal(false)}> X </button>
            </section>
        </div>
    )
}

export default AddCoins;