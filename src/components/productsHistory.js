import React from 'react';
import { userContext } from '../context/userContext';
import { LIMIT } from '../actions/constants';
import useCustomPagination from '../customHook/usePagination';
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";

const ProductsHistory = () => {
    const { history, record } = React.useContext(userContext);
    const { currentArray, next, prev, maxPage, currentPage } = useCustomPagination(record, LIMIT);

    return (
        <div className="container">
            <div className="product-history-container" style={{ display: history ? "flex" : "none" }}>
                {currentArray.map((data, _id) =>
                    <div
                        className="card"
                        style={{ width: "18rem" }}
                        key={_id}>
                        <img src={data.img.url} alt={data.name} />
                        <hr/>
                        <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-muted">{data.category}</h6>
                            <h6 className="card-title">{data.name}</h6>
                        </div>
                    </div>
                )}
            </div>
            <section className="arrows" style={{ display: history ? "flex" : "none" }}>
                <h6 className="btn-p"> Page {currentPage} / {maxPage} </h6>
                <button className="arrow-btn" onClick={() => prev()} disabled={currentPage <= 1}>
                    <img src={arrowLeft} alt="prev" />
                </button>
                <button className="arrow-btn" onClick={() => next()} disabled={currentPage >= maxPage}>
                <img src={arrowRight} alt="next" />
                </button>
            </section>
        </div>
    )
}

export default ProductsHistory;