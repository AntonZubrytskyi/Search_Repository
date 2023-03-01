import React, {FC} from 'react';
import styles from './pagination-item.module.css';
import classNames from "classnames";
import {repositoryActions} from "../../redux";
import {useAppDispatch, useAppSelector} from "../../hooks";

interface IProps {
    currentPage: number,
}

const PaginationItem: FC<IProps> = ({currentPage}) => {

    const dispatch = useAppDispatch();
    const {page} = useAppSelector(state => state.repositoryReducer);

    const liClasses = classNames({
        [styles.pageItem]: true,
        [styles.pageItemActive]: currentPage === page,
    });

    const onPageChange = () => {
        dispatch(repositoryActions.storePageNumber(currentPage))
    }
    return (
        <li
            className={liClasses}
            onClick={onPageChange}
        >
            <span className={styles.pageLink}>{currentPage}</span>
        </li>
    );
};
export default PaginationItem;
