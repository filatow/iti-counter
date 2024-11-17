import React from 'react'
import styles from './App.module.css'
import Counter from './components/Counter/Counter'

function App() {

  return (
    <div className={styles['app']}>
      <Counter/>
    </div>
  );
}

export default App;
