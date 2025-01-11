import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { Suspense, useEffect, lazy } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageNotFound from '@/components/PageNotFound';
import { SkeletonCard } from "@/components/SkeletonCard"
const Home = lazy(() => import('@/pages/Home'));
const Call = lazy(() => import('@/pages/video-calling'));

import { ToastContainer } from 'react-toastify';

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
};

const App = () => {

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen pt-16 flex flex-col overflow-hidden bg-white">
        <ToastContainer position="top-right"
          autoClose={3000} limit={2} />
        <Navbar />
        <Suspense fallback={<SkeletonCard />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/call" element={<Call />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>

      </div>
      <Footer />
    </Router>
  );
};

export default App;
