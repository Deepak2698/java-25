import React from "react";
import { Route,  BrowserRouter as Router, Routes , Link} from 'react-router-dom';
import Home from "./Home";

import ContactUs from "./ContactUs";
import Products from "../MusicComponents/Products";
import Demo from "./Demo";

export default function Routing(){
    return(
        <Router>
            <nav className="nav-bg">
                <ul className="list">
                    <li>{/* http://localhost:3000 */}
                        <Link to='/'>
                             Home
                        </Link>
                    </li>

                    <li> {/* http://localhost:3000/products */}
                        <Link to='/products'>
                             Products 
                        </Link>
                    </li>

                    <li> {/* http://localhost:3000/contact */}
                        <Link to='/contact'>
                             Contact-us
                        </Link>
                    </li>
                    
                </ul>
            </nav>

            <Routes>
                <Route path="/" element = {<Home/>}/>
                <Route path="/demo" element={<Demo/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/contact" element = {<ContactUs/>}/>
            </Routes>
           
        </Router>
    )
}