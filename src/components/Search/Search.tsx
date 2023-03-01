import React, {FC, useEffect, useState} from 'react';
import styles from './search.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {repositoryActions} from "../../redux";
import {perPage, repoNotFound} from "../../constants";

const Search: FC = () => {

    const dispatch = useAppDispatch();

    const {page, totalCount} = useAppSelector(state => state.repositoryReducer);

    const [value, setValue] = useState<string>('')

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const {value} = event.target;
        setValue(value);
        dispatch(repositoryActions.storePageNumber(1))
    }

    const queryParams = {
        q: value || 'react',
        per_page: perPage,
        page,
    }

    useEffect(() => {
        dispatch(repositoryActions.getAllRepositories({params: queryParams}))
    }, [value, page])

    return (
        <div className={styles.searchContainer}>
            <input
                type='search'
                value={value}
                onChange={handleInput}
                className={styles.searchInput}
                placeholder='Search'/>
            {!totalCount && <span className={styles.searchText}>{repoNotFound}</span>}
        </div>
    );
};

export default Search;
