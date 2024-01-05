import React from 'react'
import './App.css'
import Counter from './components/Counter/Counter'

function App() {
    return (
        <div className="app">
            <Counter
                start={0}
                limit={5}
            />
        </div>
    );
}

export default App;
