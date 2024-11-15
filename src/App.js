import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css'; // Import the CSS file

function Home() {
  return (
    <div className="home-page">
      <h3>Your One-Stop Solution for AI and Automation</h3>
      <p>Discover how our advanced AI-powered platform can help streamline your business operations. Join us today to revolutionize your workflow.</p>
      <Link to="/about" className="cta-button">
        Learn More
      </Link>
    </div>
  );
}

function About() {
  return (
    <div className="about-page">
      <h3>About Us</h3>
      <p>
        We are a leading tech company focused on providing innovative solutions to businesses around the world. Our team is passionate about creating high-quality software that helps our clients achieve their goals.
      </p>
      <p>
        Our mission is to simplify technology and make it accessible to everyone. We specialize in web development, mobile applications, and cloud services.
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact-page">
      <h3>Contact Us</h3>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

function Login() {
  return (
    <div className="login-container">
      <h3>Login</h3>
      <form>
        <label>Name:</label>
        <input type="text" className="input-field" placeholder="Enter your name" required />
        
        <label>Password:</label>
        <input type="password" className="input-field" placeholder="Enter your password" required />
        
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/" activeClassName="active">Home</Link> | <Link to="/about" activeClassName="active">About</Link> | <Link to="/contact" activeClassName="active">Contact</Link> | <Link to="/login" activeClassName="active">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
