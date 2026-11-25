
import './App.css'

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Upload from './pages/Upload';

import { Routes, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">

      {/* HEADER */}
      <header>
        <nav className="navbar navbar-dark bg-dark py-3 shadow-lg">
          <div className="container">

            <Link className="navbar-brand fw-bold fs-3" to="/">
              Shop<span className="text-primary">Vibe.</span>
            </Link>

            <span className="text-secondary small d-none d-md-block">
              Your Style, Your Lifestyle.
            </span>

            <div className="navbar-nav flex-row gap-2 gap-md-3 ms-auto">

              <Link className="nav-link text-light fw-semibold px-3 rounded-3" to="/">
                Home
              </Link>

              <Link className="nav-link text-light fw-semibold px-3 rounded-3" to="/about">
                About
              </Link>

              <Link className="nav-link text-light fw-semibold px-3 rounded-3" to="/services">
                Services
              </Link>

              <Link className="nav-link text-light fw-semibold px-3 rounded-3" to="/contact">
                Contact
              </Link>

              <Link className="nav-link text-light fw-semibold px-3 rounded-3" to="/upload">
                Upload Product
              </Link>

            </div>
          </div>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <footer className="bg-dark text-light pt-5 pb-3 mt-5">
        <div className="container">

          <div className="row g-4">

            <div className="col-md-4">
              <h3 className="fw-bold">
                Shop<span className="text-primary">Vibe.</span>
              </h3>

              <p className="text-secondary mt-3">
                Discover quality, style and convenience.
                Experience shopping in a whole new way with ShopVibe.
              </p>
            </div>

            <div className="col-md-4">
              <h5 className="fw-semibold mb-3">Quick Links</h5>

              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link className="text-secondary text-decoration-none" to="/">
                    Home
                  </Link>
                </li>

                <li className="mb-2">
                  <Link className="text-secondary text-decoration-none" to="/about">
                    About Us
                  </Link>
                </li>

                <li className="mb-2">
                  <Link className="text-secondary text-decoration-none" to="/services">
                    Our Services
                  </Link>
                </li>

                <li className="mb-2">
                  <Link className="text-secondary text-decoration-none" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <h5 className="fw-semibold mb-3">Get In Touch</h5>

              <p className="text-secondary mb-2">
                Have questions or need assistance?
              </p>

              <Link className="btn btn-primary rounded-pill px-4 mt-2" to="/contact">
                Contact Us
              </Link>
            </div>

          </div>

          <hr className="border-secondary mt-4" />

          <div className="text-center text-secondary small">
            &copy; 2026 ShopVibe. All Rights Reserved.
          </div>

        </div>
      </footer>

    </div>
  );
}

export default App;
