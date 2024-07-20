import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom'
import SignUp from './components/Auth/SignUp';

const App = () => {
  return (
    <HashRouter>
    {/* <Header/> */}
    <Routes>
        <Route path='/' element = {<SignUp/>} />
    </Routes>

</HashRouter>
  )
}

export default App