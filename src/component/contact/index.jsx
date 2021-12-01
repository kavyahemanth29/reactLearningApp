import React from 'react';
import {Link} from 'react-router-dom';
import Home from '../home/home';
const Contact = () => {
    return (
        <div>
            <p>I am contact page</p>
            <Link to="/kavya">Kavya Function</Link> | <Link to="/ani">Ani Function</Link> | <Link to="/hemanth">Hemanth Function</Link>
        </div>
    )
}
export default Contact

const Kavya = () => {
    return (
        <div>
            <p>I am Kavya's page</p>
            {/* <Link to="/contact">Contact From Kavya Function</Link> */}
            <Home/>
            <Contact />
        </div>
    )
}

const Ani = () => {
    return (
        <div>
            <p>I am Ani's page</p>
            {/* <Link to="/contact">Contact from Ani Function</Link> */}
            <Contact />
        </div>
    )
}

const Hemanth = () => {
    return (
        <div>
            <p>welcome to hemanth to contact page</p>
            <Link to="/contact">Contact from Hemanth Function</Link>
        </div>
    )
}
export {Contact, Kavya, Ani, Hemanth}