import React, {FC} from 'react';
import styles from './repo-card.module.css';
import {ReactComponent as StarIcon} from "../../icons/star.svg";
import {ReactComponent as UserIcon} from "../../icons/user.svg";

interface IProps {
    name: string;
    author: string;
    language: string;
    description: string;
    stars: number;
    watchers: number;
    image: string;
}

const RepoCard: FC<IProps> = ({
                                  stars,
                                  watchers,
                                  author,
                                  name,
                                  language,
                                  description,
                                  image
                              }) => {
    return (
        <div className={styles.cardContainer}>
            <img src={image} alt='avatar' className={styles.avatarImage}/>
            <div className={styles.detailsWrapper}>
                <span className={styles.repoName}>{name}</span>
                <span className={styles.repoAuthor}>{author}</span>
                <span className={styles.repoAuthor}>{language}</span>
                <span className={styles.repoDescription}>{description}</span>
            </div>
            <div className={styles.infoWrapper}>
                <div className={styles.starsContainer}>
                    <StarIcon/>
                    <span>{stars}</span>
                    <span className={styles.starsName}>stars</span>
                </div>
                <div className={styles.watchersContainer}>
                    <UserIcon/>
                    <span>{watchers}</span>
                    <span>watchers</span>
                </div>
            </div>
        </div>
    );
};

export default RepoCard;
