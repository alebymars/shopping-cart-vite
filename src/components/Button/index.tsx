import React, { ReactNode } from 'react';
import styles from './Button.module.css';

interface Props {
    title: string;
    icon?: ReactNode;
    onClick: () => void;
    disabled?: boolean;
    style?: React.CSSProperties;
}

const Button = ({ title, icon, onClick, style, disabled }: Props) => {
    return <button style={{ ...style }} className={`${styles.button} ${disabled && styles.disabled}`} onClick={disabled ? () => console.log('disabled') : onClick}>{icon} {title}</button>
};

export default Button;
