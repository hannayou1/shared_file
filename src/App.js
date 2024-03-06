import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import { Main } from './componets/section/Main'

const Home = lazy(() => import('./pages/Home'));

const Not = lazy(() => import('./pages/Not'));

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback = {<Main/>}>
                <Routes>
                    <Route path='/' element ={<Home/>}/>
                    <Route path='/*' element={<Not/>} />
                </Routes>
            </Suspense>
        </BrowserRouter>
        
    )
}

export default App
