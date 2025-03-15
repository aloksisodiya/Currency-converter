import { useState } from 'react'
import CurrencyConverter from './components/CurrencyCOnverter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='min-h-screen bg-[#71b7f4] flex flex-col items-center justify-center'>
      <div className='container'>
      <CurrencyConverter />
      </div>
     </div>
     
     
    </>
  )
}

export default App
