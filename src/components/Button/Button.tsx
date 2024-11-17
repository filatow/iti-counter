import React from 'react'
import s from './Button.module.css'

type ButtonPropsType = {
    caption: string
    onClick: () => void
    classes?: string
    disabled?: boolean
}

const Button: React.FC<ButtonPropsType> = (props) => {
    const className = props.classes
        ? `${s.button} ${props.classes}`
        : `${s.button}`

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