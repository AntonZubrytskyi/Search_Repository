import React, {FC} from 'react';
import styles from './button.module.css';
import classNames from "classnames";

interface IProps {
    children: string;
    styleClass: string;
    onClick?: () => void;
    disabled: boolean;
}


const Button: FC<IProps> = ({
                                styleClass,
                                disabled,
                                onClick,
                                children,
                                ...arg
                            }) => {

    const className = classNames(styles.btn, styles[styleClass]);

    return (
        <button
            className={className}
            onClick={onClick}
            disabled={disabled}
            {...arg}>
            {children}
        </button>
    );
};


export default Button;
