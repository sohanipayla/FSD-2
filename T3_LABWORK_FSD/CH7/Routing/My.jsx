// create a react application using functional components and react router dom 1)create routes for home,shop, contact and
//  404 no page 2)implement navigation using link 3) display each and evry page on respective route

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Home';
import Shop from './Shop';
import Contact from './Contact';
import NotFound from './NotFound';

function My(){
    return(
        <div>
            <Router>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/shop">SHOP</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    )
}

export default My;
