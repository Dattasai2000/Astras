import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  
  return (
 <footer className="bg-dark text-light pt-5 pb-4">
  <div className="container text-md-left">
    <div className="row">
{/* 
      <!-- Contact Us --> */}
      <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact Us</h5>
        <p><i className="fas fa-phone me-2"></i> +91 9876543210</p>
        <p><i className="fas fa-envelope me-2"></i> support@example.com</p>
      </div>
{/* 
      <!-- Address --> */}
      <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Address</h5>
        <p><i className="fas fa-location-dot me-2"></i> 123, Main Street, Hyderabad, India</p>
      </div>
{/* 
      <!-- Products --> */}
      <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Products</h5>
        <p><a href="#" className="text-light text-decoration-none">Electronics</a></p>
        <p><a href="#" className="text-light text-decoration-none">Fashion</a></p>
        <p><a href="#" className="text-light text-decoration-none">Home Appliances</a></p>
        <p><a href="#" className="text-light text-decoration-none">Toys & Games</a></p>
      </div>


      <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Follow Us</h5>
        <a href="#" className="text-light me-3"><i className="fab fa-facebook fa-lg"></i></a>
        <a href="#" className="text-light me-3"><i className="fab fa-twitter fa-lg"></i></a>
        <a href="#" className="text-light me-3"><i className="fab fa-instagram fa-lg"></i></a>
        <a href="#" className="text-light"><i className="fab fa-linkedin fa-lg"></i></a>
      </div>

    </div>

    
    <div className="row mt-4">
      <div className="col-md-12 text-center">
        <p className="text-muted">&copy; 2025 YourStore. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>
  )
}
