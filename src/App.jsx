// import React, { useEffect } from 'react';
// import {Routes, Route, useLocation, BrowserRouter } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Services from './components/Services';
// import Calculators from './components/Calculators';
// import Footer from './components/Footer';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Login from './pages/Login';
// import Signup from './pages/Signup';

// function ScrollToTop() {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//   return null;
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <ScrollToTop />
//       <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col">
//         <Navbar />
//         <main className="flex-grow pt-20">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/tools" element={<Calculators />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }





import React, { useEffect } from 'react';
import { Routes, Route, useLocation, BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './pages/Footer';

import Home from './pages/Home';
import Services from './pages/Services';
import Calculators from './components/Calculators';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col">
        
        {/* Navbar always visible */}
        <Navbar />

        <main className="flex-grow pt-20">
          <Routes>

            {/* FIXED: Home page route */}
            <Route path="/" element={<Home />} />

            <Route path="/services" element={<Services />} />
            <Route path="/tools" element={<Calculators />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
          </Routes>
        </main>

        {/* Footer always visible */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
