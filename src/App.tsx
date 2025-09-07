import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "@/pages/CartContext";
import { ThemeProvider } from "@/components/theme-provider";

// ScrollToTop Component
import ScrollToTop from "./components/ScrollToTop";

// Layout & Pages
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import AllProducts from "./pages/AllProducts";
import ProductCategory from "./pages/ProductCategory";
import SubCategoryPage from "./pages/SubCategoryPage";
import ProductDetails from "./pages/ProductDetails";
import ProductDetailPage from "./pages/Productdetailspage";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";

// Settings/Admin Panel
import Dashboard from "./pages/adminpages/Dashboard";
import Settings from "./pages/adminpages/Settings";
import Orders from "./pages/adminpages/Orders";
import Users from "./pages/adminpages/Users";
import ManageTeams from "./pages/adminpages/ManageTeams";
import ProfileInformation from "./components/account/ProfileInformation";
import PANCardInformation from "./components/account/PANCardInformation";
import ManageAddresses from "./components/account/ManageAddresses";
import GiftCards from "./components/payments/GiftCards";
import SavedUpi from "./components/payments/SavedUpi";
import SavedCards from "./components/payments/SavedCards";
import BlogPost from "./pages/BlogPost";
import UserLogin from './pages/UserLogin';
import AdminLogin from './pages/AdminLogin';
import ProtectedAdminRoute from './components/ProtectedAdminRoute';
import DashboardLayout from './pages/adminpages/DashboardLayout';
import ProductDetailsPage from "./pages/Productdetailspage";
const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <AuthProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <ScrollToTop /> 
                <Routes>
                  {/* General Pages */}
                  <Route path="/" element={<Layout><Home /></Layout>} />
                  <Route path="/about" element={<Layout><About /></Layout>} />
                  <Route path="/login" element={<Layout><Login /></Layout>} />
                  <Route path="/signup" element={<Layout><SignUp /></Layout>} />
                  <Route path="/blog" element={<Layout><Blog /></Layout>} />
                  <Route path="/contact" element={<Layout><Contact /></Layout>} />
                  <Route path="/faq" element={<Layout><FAQ /></Layout>} />
                  <Route path="/blog/:id" element={<Layout><BlogPost /></Layout>} />


 <Route path="/user-login" element={<UserLogin />} />
  <Route path="/admin-login" element={<AdminLogin />} />
                  {/* Cart and Checkout */}
                  <Route path="/cart" element={<Layout><Cart /></Layout>} />
                  <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
                  <Route path="/order-confirmation" element={<Layout><OrderConfirmation /></Layout>} />

                  {/* Product Pages */}
                  <Route path="/products" element={<Layout><Products /></Layout>} />
                  <Route path="/all-products" element={<Layout><AllProducts /></Layout>} />
                  <Route path="/products/:category" element={<Layout><ProductCategory /></Layout>} />
                  <Route path="/products/:category/:subcategory" element={<Layout><SubCategoryPage /></Layout>} />
                  <Route path="/products/:category/:subcategory/:id" element={<Layout><ProductDetails /></Layout>} />
 <Route
    path="/products/:category/:subcategory/:id"
    element={
      <Layout>
        <ProductDetailsPage />
      </Layout>
    }
  />
                  {/* Admin Dashboard - Settings section */}
                  <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="users" element={<Users />} />
                    <Route path="teams" element={<ManageTeams />} />
                    <Route path="settings" element={<Settings />}>
                      <Route index element={<ProfileInformation />} />
                      <Route path="addresses" element={<ManageAddresses />} />
                      <Route path="pan" element={<PANCardInformation />} />
                      <Route path="gift-cards" element={<GiftCards giftCards={0} onAddGiftCard={() => {}} />} />
                      <Route path="saved-upi" element={<SavedUpi savedUpi={""} onAddUpi={() => {}} />} />
                      <Route path="saved-cards" element={<SavedCards savedCards={[]} onAddCard={() => {}} onRemoveCard={() => {}} />} />
                    </Route>
                  </Route>
{/*Admin routes*/}
  <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin-dashboard/*"
          element={
            <ProtectedAdminRoute>
              <DashboardLayout />
            </ProtectedAdminRoute>
          }
        />
                  {/* 404 Not Found */}
                  <Route path="*" element={<Layout><NotFound /></Layout>} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </AuthProvider>
        </CartProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
