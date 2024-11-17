import React from 'react'
import styles from './Button.module.css'

type ButtonPropsType = {
    caption: string
    onClick: () => void
    classes?: string
    disabled?: boolean
}

const Button: React.FC<ButtonPropsType> = (props) => {
    const className = props.classes
        ? `${styles['button']} ${props.classes}`
        : `${styles['button']}`

    const onClickHandler = () => props.onClick()

    return (
        <button
            className={className}
            onClick={onClickHandler}
            disabled={props.disabled}
        >{props.caption}</button>
    );
};

export default Button;