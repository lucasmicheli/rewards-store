import { useState } from 'react';

function usePagination(data, itemsPerPage) {
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.length / itemsPerPage);

    function currentData() {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice(begin, end);
    }

    const currentArray = data.slice((currentPage-1)*itemsPerPage, currentPage * itemsPerPage);

    function next() {
        setCurrentPage(currentPage + 1);
    }
    
    function prev() {
        setCurrentPage(currentPage - 1);
    }
    
    function jump(page) {
        setCurrentPage(page);
    }
    
    return { next, prev, jump, currentData, currentPage, maxPage, currentArray }
}

export default usePagination;

