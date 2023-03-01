import React, {FC} from 'react';
import styles from './pagination.module.css';
import PaginationItem from "../PaginationItem/PaginationItem";
import Button from "../Button/Button";
import {useAppDispatch, useAppSelector} from "../../hooks";
import usePaginate from "../../hooks/usePaginate";
import {repositoryActions} from "../../redux";


const Pagination: FC = () => {
    const dispatch = useAppDispatch();

    const {totalCount, page} = useAppSelector(state => state.repositoryReducer);

    const {pages, isFirstPage, isLastPage} = usePaginate(totalCount, page);

    const nextPage = () => {
        dispatch(repositoryActions.nextPage());
    };
    const previousPage = () => {
        dispatch(repositoryActions.previousPage())
    }
    return (
        <ul className={styles.pagination}>
            <li>
                <Button
                    styleClass='btn-paginate'
                    onClick={previousPage}
                    disabled={isFirstPage}
                >
                    Previous
                </Button>
            </li>
            {pages.map((page) => (
                <PaginationItem
                    currentPage={page}
                    key={page}
                />
            ))}
            <li>
                <Button
                    styleClass='btn-paginate'
                    onClick={nextPage}
                    disabled={isLastPage}
                >
                    Next
                </Button>
            </li>
        </ul>
    );
};

export default Pagination;
