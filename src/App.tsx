import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <Button
          variant="destructive"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <p>fsfsfsfsfsfsdfsfsdf</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App
