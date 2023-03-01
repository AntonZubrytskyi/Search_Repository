import React, {useEffect, useState} from 'react';
import {pagesInRow, perPage} from "../constants";
import {repositoryActions} from "../redux";
import {useAppDispatch} from "./redux";

const usePaginate = (totalCount: number, currentPage: number) => {

    const dispatch = useAppDispatch();

    const pagesCount = Math.ceil(totalCount / perPage);

    const [pages, setPages] = useState<number[]>([]);

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === pagesCount;

    const pageNumbers: number[] = [];

    for (let i = 1; i <= pagesCount; i++) {
        pageNumbers.push(i);
    }

    const isExist = pages.some(page => page === currentPage);

    useEffect(() => {
        if (currentPage > 8) {
            setPages(pageNumbers.slice(currentPage - pagesInRow, currentPage));
            return;
        }
        if (pagesCount < pagesInRow) {
            setPages(pageNumbers);
            return;
        }
        setPages(pageNumbers.slice(0, pagesInRow))
        // setPages(pageNumbers.slice());

        // if (!isExist) {
        //     const newPages = currentPage > pagesInRow ?
        //         pageNumbers.slice(currentPage - pagesInRow, currentPage) :
        //         pageNumbers.slice(0, pagesInRow);
        //     // const newPages = pageNumbers.slice(currentPage - pagesInRow, currentPage)
        //     setPages(newPages);
        //     console.log('pages',pages);
        //     return;
        // }
        //

    }, [currentPage, pagesCount])

    useEffect(() => {
        dispatch(repositoryActions.storePageNumber(currentPage))
    }, [currentPage]);

    return {pages, isFirstPage, isLastPage};
};

export default usePaginate;
