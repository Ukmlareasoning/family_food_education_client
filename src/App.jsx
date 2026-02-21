import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './User/Home.jsx'
import About from './User/About.jsx'
import Contact from './User/Contact.jsx'
import Blog from './User/Blog.jsx'
import BlogPostDetails from './User/BlogPostDetails.jsx'
import FAQ from './User/FAQ.jsx'
import Privacy from './User/Privacy.jsx'
import Terms from './User/Terms.jsx'
import Cookies from './User/Cookies.jsx'
import Features from './User/Features.jsx'
import ParentDashboard from './User/ParentDashboard.jsx'
import KidsZone from './User/KidsZone.jsx'
import Auth from './User/Auth.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPostDetails />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/features" element={<Features />} />
        <Route path="/parent-dashboard" element={<ParentDashboard />} />
        <Route path="/kids-zone" element={<KidsZone />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
