import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Router } from './router/Router'
import TagManager from 'react-gtm-module'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'G-ELRYDS2PPW'
    }
  
    TagManager.initialize(tagManagerArgs);
  }, [])

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
