import React, {useState} from 'react'
import './Counter.css'
import Button from '../Button/Button'

type CounterPropsType = {
    start: number
    limit: number
    increment?: number
}

const Counter: React.FC<CounterPropsType> = (props) => {
    const [value, setValue] = useState<number>(props.start)

    const increment = props.increment || 1
    const isLimitReached = value >= props.limit
    const isIncDisabled = isLimitReached
    const isResetDisabled = value === 0
    const monitorClassName = `counter__monitor ${isLimitReached && 'text-alert'}`

    const incOnClickHandler = () => setValue(value + increment)
    const resetOnClickHandler = () => setValue(props.start)

    return (
        <div className="counter">
            <div className={monitorClassName}>
                {value}
            </div>
            <div className="counter__buttons">
                <Button
                    caption="INC"
                    onClick={incOnClickHandler}
                    classes="counter__button"
                    disabled={isIncDisabled}
                />
                <Button
                    caption="RESET"
                    onClick={resetOnClickHandler}
                    classes="counter__button"
                    disabled={isResetDisabled}
                />
            </div>
        </div>
    );
}

export default Counter;