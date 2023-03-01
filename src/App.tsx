import React, {FC} from 'react';
import styles from './App.module.css';
import Search from "./components/Search/Search";
import RepoList from "./components/RepoList/RepoList";

const App: FC = () => {

    return (
        <div className={styles.appContainer}>
            <Search/>
            <RepoList/>
        </div>
    );
}

export default App;
