import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Statistics from './components/Statistics'
import CoreValues from './components/CoreValues'
import Messages from './components/Messages'
import News from './components/News'
import Footer from './components/Footer'
import ContactPage from './components/ContactPage'
import ServicesListing from './components/ServicesListing'
import ServiceDetails from './components/ServiceDetails'
import CeoMessage from './components/CeoMessage'
import ChairmanMessage from './components/ChairmanMessage'
import AboutMrAxis from './components/AboutMrAxis'
import CompanyOverview from './components/CompanyOverview'
import LegalDocument from './components/LegalDocument'
import MissionVisionValue from './components/MissionVisionValue'
import BlogListing from './components/BlogListing'
import BlogDetails from './components/BlogDetails'
import RecruitmentProcess from './components/RecruitmentProcess'

// Home Page Component
function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Statistics />
      <CoreValues />
      <Messages />
      <News />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesListing />} />
            <Route path="/services/:slug" element={<ServiceDetails />} />
            <Route path="/ceo-message" element={<CeoMessage />} />
            <Route path="/chairman-message" element={<ChairmanMessage />} />
            <Route path="/about-mraxis" element={<AboutMrAxis />} />
            <Route path="/company-overview" element={<CompanyOverview />} />
            <Route path="/legal-document" element={<LegalDocument />} />
            <Route path="/mission-vision-value" element={<MissionVisionValue />} />
            <Route path="/blog" element={<BlogListing />} />
            <Route path="/blog/:slug" element={<BlogDetails />} />
            <Route path="/recruitment-process" element={<RecruitmentProcess />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
