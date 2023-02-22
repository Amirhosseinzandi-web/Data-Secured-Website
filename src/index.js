import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App';
import reportWebVitals from './reportWebVitals';
import "./style/style.css"
import "./style/responsive.css"
import{createBrowserRouter , createRoutesFromChildren , Route , RouterProvider} from "react-router-dom"
import Recovery from './component/pages/Recovery';
import Cloud from './component/pages/Cloud';
import Contact from './component/pages/Contact';




function Main(){
    const router = createBrowserRouter(
        createRoutesFromChildren(
            <>
                <Route path='/' element={<App/>}/>
                <Route path='/recovery' element={<Recovery/>}/>
                <Route path='/cloud' element={<Cloud/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </>
        )
    )
    return(
        <RouterProvider router={router}/>
    )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
