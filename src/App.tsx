import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import ScrollToTop from './components/common/ScrollToTop';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

import HomePage from './pages/homePage/HomePage';
import StayPage from './pages/stayPage/StayPage';
import EntertainmentPage from './pages/entertainment/EntertainmentPage';
import EntertainmentDetailPage from './pages/entertainment/EntertainmentDetailPage';
import EventsPage from './pages/events/EventsPage';
import ChildrenPlayPage from './pages/childrenPlay/ChildrenPlayPage';
import RestaurantPage from './pages/restaurant/RestaurantPage/RestaurantPage';
import FashionShoppingPage from './pages/fashionShopping/FashionShoppingPage';

function AppShell() {
  const location = useLocation();
  const isRestaurant = location.pathname === '/restaurant';

  return (
    <>
      <ScrollToTop />
      <div
        className={`w-100 min-vh-100${isRestaurant ? ' app-shell--restaurant' : ' bg-white text-dark'}`}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stay" element={<StayPage />} />
          <Route path="/entertainment" element={<EntertainmentPage />} />
          <Route
            path="/entertainment/:id"
            element={<EntertainmentDetailPage />}
          />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/kids-play" element={<ChildrenPlayPage />} />
          <Route path="/restaurant" element={<RestaurantPage />} />
          <Route path="/fashion-shopping" element={<FashionShoppingPage />} />
        </Routes>
        {!isRestaurant && <Footer />}
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App;