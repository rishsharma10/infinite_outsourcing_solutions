import { ChevronRight, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { HOMEPAGE } from '@/utils/content';
import logo from "@/assets/logo-white.png"
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div  initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >

    <footer className="bg-dark text-light pt-5 position-relative">
      <div className="container pb-5">
        <div className="row g-4">
          <div className="col-lg-3">
          <a className="navbar-brand" href="#">
                <img src={logo.src} height={40} />
              </a>
            <p className='mt-5'>{HOMEPAGE.heading}.</p>
            <div className="d-flex gap-2">
              <a href="#" className="text-light"><Facebook size={18} /></a>
              <a href="#" className="text-light"><Twitter size={18} /></a>
              <a href="#" className="text-light"><Instagram size={18} /></a>
              <a href="#" className="text-light"><Linkedin size={18} /></a>
            </div>
          </div>

          <div className="col-lg-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              {['services', 'Industries we serve', 'about us', 'contact us'].map((link, i) => (
                <li key={i}>
                  <a href={`#${link}`} className="text-light text-decoration-none d-flex align-items-center">
                    <ChevronRight size={16} className="me-1" /> {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3">
            <h5>Services</h5>
            <ul className="list-unstyled">
              {['Job Seekers', 'Jobs', 'Blogs'].map((service, i) => (
                <li key={i}>
                  <a href="#" className="text-light text-decoration-none d-flex align-items-center">
                    <ChevronRight size={16} className="me-1" /> {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3">
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li className="d-flex align-items-start mb-2">
                <MapPin size={18} className="me-2 mt-1" />
                <span>3040 Post Oak blvd, Floor 18</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <Phone size={18} className="me-2" />
                <a href="tel:+15551234567" className="text-light text-decoration-none">+1 (555) 123-4567</a>
              </li>
              <li className="d-flex align-items-center">
                <Mail size={18} className="me-2" />
                <a href="mailto:info@example.com" className="text-light text-decoration-none">contact@infiniteos.com</a>
              </li>
            </ul>

            <h6 className="mt-4">Subscribe to our newsletter</h6>
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Your email address" />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-light py-3">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-2 mb-md-0">© {new Date().getFullYear()} Infinite Outsourcing Solutions. All Rights Reserved.</p>
          <div>
            <a href="#" className="text-light text-decoration-none me-3">Privacy Policy</a>
            <a href="#" className="text-light text-decoration-none me-3">Terms of Service</a>
            <a href="#" className="text-light text-decoration-none">Cookie Policy</a>
          </div>
        </div>
      </div>

      <button 
        className="btn btn-outline-light position-absolute end-0 bottom-0 m-4 rounded-circle shadow"
        onClick={scrollToTop}
        style={{ width: 40, height: 40 }}
      >
        <ArrowUp size={20} />
      </button>
    </footer>
    </motion.div>

  );
};

export default Footer;
