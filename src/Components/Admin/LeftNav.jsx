import React from 'react'
import { Link } from 'react-router-dom'


export default function LeftNav() {
    return (
        <>
            <div className="list-group">
                
                <Link to="/adminHome" className="list-group-item list-group-item-action">Home</Link>
                <Link to="/adminUsers" className="list-group-item list-group-item-action">Users</Link>
                <Link to="/adminMaincatagories" className="list-group-item list-group-item-action">Main-Catagoires</Link>
                <Link to="/adminSubcatagories" className="list-group-item list-group-item-action">Sub-Catagories</Link>
                <Link to="/adminBrands" className="list-group-item list-group-item-action">Brands</Link>
                <Link to="/adminContact" className="list-group-item list-group-item-action">Contact Us</Link>
                <Link to="/adminProduct" className="list-group-item list-group-item-action">Products</Link>
                <Link to="/adminNewsletters" className="list-group-item list-group-item-action">News-Letters</Link>
                <Link to="/adminCheckout" className="list-group-item list-group-item-action">Check-Out</Link>
               
            </div>
        </>
    )
}
