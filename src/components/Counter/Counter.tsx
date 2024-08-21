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
    const monitorClassName = `counter__monitor ${isLimitReached ? 'text-alert' : ''}`

    const incOnClickHandler = () => setValue(value + increment)
    const resetOnClickHandler = () => setValue(props.start)
    const setOnClickHandler = () => {
    }

    return (
        <div className="counter">
            <section className="counter__widget counter__settings">
                <div className="counter__top counter__settings-form">
                    <div className="input-group">
                        <label className="input-group__label" htmlFor="max-value">Max value:</label>
                        <input className="input-group__number" id="max-value" type="number"/>
                    </div>
                    <div className="input-group">
                        <label className="input-group__label" htmlFor="start-value">Start value:</label>
                        <input className="input-group__number" id="start-value" type="number"/>
                    </div>
                </div>
                <div className="counter__buttons">
                    <Button
                        caption="SET"
                        onClick={setOnClickHandler}
                        classes="counter__button"
                    />
                </div>
            </section>
            <section className="counter__widget counter__main">
                <div className={'counter__top ' + monitorClassName}>
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
            </section>
        </div>
    );
}

export default Counter;