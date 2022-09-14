import { Box } from '@mui/material';
import React, { useRef, useState } from 'react';
import DashboardSidebar from '../layout/DashboardSidebar';
import Footer from '../layout/Footer';
import DashboardNavbar from '../layout/Navbar';
import AboutUs from '../section/About';
import BlogSection from '../section/BlogSection';
import GetInTouch from '../section/GetInTouch';
import HeroSection from '../section/HeroSection';
import Portfolio from '../section/Portfolio';

export default function LandingPage() {
  const home = useRef();
  const contact = useRef();
  const about = useRef();
  const portfolio = useRef();
  const blog = useRef();
  const [isActive, setIsActive] = useState('home');
  const [open, setOpen] = useState(false);

  const handleSideBar = () => {
    setOpen(!open);
  };

  function handleBackClick(title) {
    switch (title) {
      case 'home':
        home.current.scrollIntoView({ behavior: 'smooth' });
        setIsActive('home');
        break;
      case 'contact':
        contact.current.scrollIntoView({ behavior: 'smooth' });
        setIsActive('contact');
        break;
      case 'about':
        about.current.scrollIntoView({ behavior: 'smooth' });
        setIsActive('about');

        break;
      case 'portfolio':
        portfolio.current.scrollIntoView({ behavior: 'smooth' });
        setIsActive('portfolio');

        break;
      case 'blog':
        blog.current.scrollIntoView({ behavior: 'smooth' });
        setIsActive('blog');

        break;
      default:
        blog.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <Box
      sx={{
        background: (theme) => theme.palette.primary.dark,
      }}>
      <DashboardNavbar handleSideBar={handleSideBar} isActive={isActive} handleBackClick={handleBackClick} />
      <DashboardSidebar
        handleSideBar={handleSideBar}
        open={open}
        isActive={isActive}
        handleBackClick={handleBackClick}
      />
      <section ref={home}>
        <HeroSection />
      </section>

      <section ref={about}>
        <AboutUs />
      </section>
      <section ref={portfolio}>
        <Portfolio />
      </section>
      <section ref={blog}>
        <BlogSection />
      </section>
      <section ref={contact}>
        <GetInTouch />
      </section>

      <Footer />
    </Box>
  );
}
