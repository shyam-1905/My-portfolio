import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Qualification from './components/qualification/Qualification'
import { Helmet } from "react-helmet"
import ME from './assets/my-photo-about.png'



const App = () => {
  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>My Personal Portfolio</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Welcome to my personal portfolio website, where you can see instances of my work as a web and app developer. Explore my projects to learn more about my skills." />
          <meta name="keywords" content="portfolio, developer, web developer, App developer" />
          <meta name="author" content="Yenna Shyam Prasad Reddy" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="My Personal Portfolio" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={ME} />
          <meta property="og:url" content="https://yennashyamprasadreddy.com" />
      </Helmet>

        <Header />
        <Nav />
        <About />
        <Qualification/>
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />

    </>
  )
}

export default App