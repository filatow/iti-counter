import React from 'react'
import styles from './App.module.css'
import Counter from './components/Counter/Counter'

function App() {
  const start = Number(localStorage.getItem('counter-start')) || 0
  const limit = Number(localStorage.getItem('counter-limit')) || 5

  return (
    <div className={styles['app']}>
      <Counter
        start={start}
        limit={limit}
      />
    </div>
  );
}

export default App;
