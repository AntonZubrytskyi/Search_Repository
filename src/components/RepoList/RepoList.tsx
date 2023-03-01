import React, {FC} from 'react';
import styles from './repo-list.module.css';
import {useAppSelector} from "../../hooks";
import RepoCard from "../RepoCard/RepoCard";
import Pagination from "../Pagination/Pagination";

const RepoList: FC = () => {

    const {repositories, totalCount} = useAppSelector(state => state.repositoryReducer);

    return (
        <div className={styles.listContainer}>
            {
                repositories.map(repository =>
                    <RepoCard
                        key={repository.id}
                        image={repository.owner.avatar_url}
                        name={repository.name}
                        author={repository.owner.login}
                        language={repository.language}
                        description={repository.description}
                        stars={repository.stargazers_count}
                        watchers={repository.watchers}/>)
            }
            {!!totalCount && <Pagination/>}
        </div>
    );
};

export default RepoList;
