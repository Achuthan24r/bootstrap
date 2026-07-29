import { useState, useEffect, useContext , useRef} from 'react'


function Counter() {
  const [count, setCount] = useState(0)
  let refCounter = useRef(0)
  

  function inc() {
   // setCount(prevCount => prevCount + 2)
    refCounter.current += 2
    console.log('Ref Counter updated:', refCounter.current)
    console.log('Count updated:', count)
  }

  useEffect(() => {
    document.title = `Count: ${count}`
 //   console.log('Count updated:', count)
 //   console.log('Ref Counter updated:', refCounter.current)
  }, [])

  return (
    <div>
      <h2>Gryffindor: {gryffindor}</h2>
      <h1>Counter</h1>
      <p>{count}</p>
      <p>Ref Counter: {refCounter.current}</p>
      <button className="btn btn-primary" onClick={inc}>
        Increment
      </button>
      
      <button className="btn btn-secondary" onClick={() => setCount(refCounter.current + 1)}>
        Increment Count
      </button>
    </div>
  )
}

export default Counter