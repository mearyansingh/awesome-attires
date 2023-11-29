import React from 'react'
import { Link } from 'react-router-dom'

import { BrandLogo } from "../../Assets/images/BrandLogo";

export default function Footer() {
   return (
      <div className="container">
         <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top">
            <p className="col-md-4 mb-0 text-muted">© 2023 Company, Inc</p>
            <Link to="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
               <BrandLogo />
            </Link>
            <ul className="nav col-md-4 justify-content-end">
               <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
               <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
               <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
               <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
               <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
            </ul>
         </footer>
      </div>
   )
}
