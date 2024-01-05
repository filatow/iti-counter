import React from 'react'
import './Button.css'

type ButtonPropsType = {
    caption: string
    onClick: () => void
    classes?: string
    disabled?: boolean
}

const Button: React.FC<ButtonPropsType> = (props) => {
    const className = props.classes
        ? `button ${props.classes}`
        : `button`

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