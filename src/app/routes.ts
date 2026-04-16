import { createBrowserRouter } from "react-router-dom";

// --- 1. IMPORT ALL PAGES ---
import { LandingPage } from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage"; 
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ExplorePage from "./pages/ExplorePage";
import  EventsPage  from "./pages/EventsPage";
import { ArtisanProfilePage } from "./pages/ArtisanProfilePage";
import { BookingPage } from "./pages/BookingPage";
import { TicketPage } from "./pages/TicketPage";

// --- 2. IMPORT NEW HOMESTAY & CONTACT PAGES ---
/// --- 2. IMPORT NEW HOMESTAY & CONTACT PAGES ---
import HomestaysPage from "./pages/HomestaysPage"; // 👈 ADD THIS LINE
import { HomestayBookingPage } from "./pages/HomestayBookingPage";
import ContactPage from "./pages/ContactPage";

// --- 3. IMPORT DASHBOARDS ---
import ArtisanDashboard from "./pages/ArtisanDashboard";
import HomestayDashboard from "./pages/HomestayDashboard";

// --- 4. MAP THE ROUTES ---
export const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  { path: "/login", Component: LoginPage },
  { path: "/home", Component: HomePage },
  { path: "/about", Component: AboutPage },
  { path: "/events", Component: EventsPage },
  { path: "/explore", Component: ExplorePage },
  { path: "/artisan/:id", Component: ArtisanProfilePage },
  { path: "/booking/:id", Component: BookingPage },
  { path: "/ticket/:bookingId", Component: TicketPage },
  
  // The newly connected routes
  { path: "/homestays", Component: HomestaysPage },
  { path: "/stay-booking/:id", Component: HomestayBookingPage },
  { path: "/contact", Component: ContactPage },
  
  // The control centers
  { path: "/artisan-dashboard", Component: ArtisanDashboard },
  { path: "/homestay-dashboard", Component: HomestayDashboard },
]);