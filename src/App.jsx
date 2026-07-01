import Navbar from "./Layout/Navbar";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "../src/pages/About"
import Pages from "./pages/Pages";
import Contact from "./pages/Contact";
import BookTable from "./Components/BookTable"
import RegisterPage from "./Components/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AdminPanel from "./pages/AdminPanel";
import AdminProtectedRoute from "./pages/AdminProtectedRoute"
import Dashboard from "./Components/Dashboard";
import Food from "./Components/Food";
import AddFoodPage from "./pages/AddFoodPage";
import EditFoodPage from "./pages/EditFoodPage";
import Detailspage from "./pages/Detailspage";
import Order from "./pages/Order";
import Booking from "./pages/Bookings";
import Bookings from "./pages/Bookings";
import Footers from "./Layout/Footers";

function Layout() {
  const location = useLocation()

  const isAdminRoute = location.pathname.startsWith("/admin");
  return (
    <>
      {!isAdminRoute && <Navbar />}
      <div style={{ marginTop: isAdminRoute ? "0px" : "120px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booktable" element={<BookTable />} />
          <Route path="/get-details/:id" element={<Detailspage />} />
         <Route path="/order" element={<Order />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminProtectedRoute />}>
            <Route path="" element={<AdminPanel />}>
              <Route
                path="dashboard"
                element={<Dashboard />}
              />

              <Route
                path="food"
                element={<Food />}
              />
              <Route
                path="/admin/add-food"
                element={<AddFoodPage />}
              />
              <Route
                path="/admin/edit/:id"
                element={<EditFoodPage />}
              />
              <Route
                path="/admin/booking"
                element={<Bookings />}
              />

            </Route>
          </Route>

        </Routes>
      </div>
      {!isAdminRoute && <Footers />}
    </>
  )
}



function App() {

  return (
    <>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </>
  )
}

export default App
