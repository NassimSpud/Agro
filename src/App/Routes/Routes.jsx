import { Routes, Route } from "react-router-dom";

// ==================== Landing & Public Pages ====================
import LandingPage from "../LandingPage/Landing";
import Login from "../Authentication/Login/Login";

// Public sub-pages
import Market from "../LandingPage/pages/Market";
import Community from "../LandingPage/pages/Community";
import Services from "../LandingPage/pages/Services";
import AboutUs from "../LandingPage/pages/AboutUs";
import ServiceMarketplace from "../LandingPage/pages/services/Marketplace";
import ServiceLogistics from "../LandingPage/pages/services/Logistics";
import ServicePayments from "../LandingPage/pages/services/Payments";
import ServiceAdvisory from "../LandingPage/pages/services/Advisory";
import ServiceWholesale from "../LandingPage/pages/services/Wholesale";
import ServiceVerification from "../LandingPage/pages/services/Verification";

// ==================== Dashboard Layouts ====================
import BuyerDashBoard from "../Modules/Users/BuyersDashBoard.jsx";
import DeliveryDashBoard from "../Modules/Users/DeliverersDashBoard.jsx";
import FarmerDashBoard from "../Modules/Users/FarmersDashBoard.jsx";

// ==================== Buyer Components ====================
import BuyerHome from "../Modules/Buyers/BuyerHome";
import MarketPlace from "../Modules/Buyers/MarketPlace";
import Orders from "../Modules/Buyers/Orders";
import Tracking from "../Modules/Buyers/Tracking";
import Favorites from "../Modules/Buyers/Favorites";
import Categories from "../Modules/Buyers/Categories/Categories";
import Fruits from "../Modules/Buyers/Fruits";
import Vegetables from "../Modules/Buyers/Categories/Vegetables.jsx";
import DairyProducts from "../Modules/Buyers/Categories/DairyProducts";
import Guides from "../Modules/Buyers/Guides";
import BuyerMessages from "../Modules/Buyers/BuyerMessage";
import NearbyShop from "../Modules/Buyers/NearbyShop";
import Settings from "../Modules/Buyers/Settings";
import Cart from "../Modules/Buyers/Header/Cart/Cart.jsx";

// ==================== Delivery Components ====================
import DeliveryHome from "../Modules/Deliverers/DeliveryHome";
import ActiveDeliveries from "../Modules/Deliverers/ActiveDeliveries";
import DeliveryHistory from "../Modules/Deliverers/DeliveryHistory";
import RoutesPage from "../Modules/Deliverers/DeliveryRoutes";
import DeliveryTracking from "../Modules/Deliverers/Tracking";
import DeliveryMessages from "../Modules/Deliverers/Messages";
import DeliveryGuides from "../Modules/Deliverers/Guides";
import DeliveryFaq from "../Modules/Deliverers/FAQ";
import ToolsResources from "../Modules/Deliverers/ToolsResources";
import DeliveryCommunity from "../Modules/Deliverers/Community";
import DeliverySettings from "../Modules/Deliverers/Settings";

// ==================== Farmer Components ====================
import FarmerHome from "../Modules/Farmers/FarmerHome";
import FarmerProducts from "../Modules/Farmers/FarmerProducts";
import FarmerOrders from "../Modules/Farmers/FarmerOrders";
import FarmerInventory from "../Modules/Farmers/FarmerInventory";
import FarmerDeliveries from "../Modules/Farmers/FarmerDeliveries";
import FarmerPayments from "../Modules/Farmers/FarmerPayments";
import FarmerDeliveryHistory from "../Modules/Farmers/FarmerDeliveryHistory";
import FarmerTracking from "../Modules/Farmers/FarmerTracking";
import FarmerMessages from "../Modules/Farmers/FarmerMessages";
import FarmerCategories from "../Modules/Farmers/FarmerCategories";
import FarmerGuides from "../Modules/Farmers/FarmerGuides";
import FarmerFaq from "../Modules/Farmers/FarmerFAQ";
import FarmerCommunity from "../Modules/Farmers/FarmerCommunity";
import FarmerSettings from "../Modules/Farmers/FarmerSettings";

// ==================== Market Seller Components (not built yet) ====================
// import MarketSellersDashBoard from "../Modules/Users/MarketSellersDashBoard.jsx";
// import MarketSellersHome from "../Modules/MarketSellers/MarketSellersHome";
// import MarketSellersOrders from "../Modules/MarketSellers/MarketSellersOrders";
// import MarketSellersInventory from "../Modules/MarketSellers/MarketSellersInventory";
// import MarketSellersDeliveries from "../Modules/MarketSellers/MarketSellersDeliveries";
// import MarketSellersDeliveryHistory from "../Modules/MarketSellers/MarketSellersDeliveryHistory";
// import MarketSellersTracking from "../Modules/MarketSellers/MarketSellersTracking";
// import MarketSellersMessages from "../Modules/MarketSellers/MarketSellersMessages";
// import MarketSellersCategoriesFruits from "../Modules/MarketSellers/Categories/MarketSellersCategoriesFruits";
// import MarketSellersCategoriesVegetables from "../Modules/MarketSellers/Categories/MarketSellersCategoriesVegetables";
// import MarketSellersCategoriesDairy from "../Modules/MarketSellers/Categories/MarketSellersCategoriesDairy";
// import MarketSellersGuides from "../Modules/MarketSellers/MarketSellersGuides";
// import MarketSellersFaq from "../Modules/MarketSellers/MarketSellersFAQ";
// import MarketSellersCommunity from "../Modules/MarketSellers/MarketSellersCommunity";

// ==================== Admin Components (not built yet) ====================
// import AdminDashboard from "../Modules/Users/AdminDashboard.jsx";
// import AdminHome from "../Modules/Administrator/Home/Home";
// import ViewUsers from "../Modules/Administrator/UserManagement/ViewUsers";
// import AddUser from "../Modules/Administrator/UserManagement/AddUser";
// import ManageRoles from "../Modules/Administrator/UserManagement/ManageRoles";
// import ViewListings from "../Modules/Administrator/Market/ViewListings";
// import AddListing from "../Modules/Administrator/Market/AddListing";
// import ManageCategories from "../Modules/Administrator/Market/ManageCategories";
// import Transactions from "../Modules/Administrator/Market/Transactions";
// import AdminOrders from "../Modules/Administrator/Orders/Orders";
// import Payments from "../Modules/Administrator/Payments/Payments";
// import Notifications from "../Modules/Administrator/Notifications/Notifications";
// import Broadcasts from "../Modules/Administrator/Broadcasts/Broadcasts";
// import Clients from "../Modules/Administrator/BusinessManagement/Clients";
// import Contracts from "../Modules/Administrator/BusinessManagement/Contracts";
// import Invoices from "../Modules/Administrator/BusinessManagement/Invoices";
// import Reports from "../Modules/Administrator/Reports/Reports";
// import Messages from "../Modules/Administrator/Messages/Messages";
// import KnowledgeBase from "../Modules/Administrator/KnowledgeBase/KnowledgeBase";
// import GeneralSettings from "../Modules/Administrator/SystemSettings/GeneralSettings";
// import SecuritySettings from "../Modules/Administrator/SystemSettings/SecuritySettings";
// import APIKeys from "../Modules/Administrator/SystemSettings/APIKeys";
// import Tools from "../Modules/Administrator/Tools/Tools";

// ==================== Routes ====================
function AppRoutes() {
  return (
    <Routes>
      {/* ==================== PUBLIC ==================== */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<Login />} />

      {/* Public marketing pages */}
      <Route path="/market" element={<Market />} />
      <Route path="/community" element={<Community />} />
      <Route path="/about" element={<AboutUs />} />

      {/* Services — overview + detail pages */}
      <Route path="/services" element={<Services />} />
      <Route path="/services/marketplace" element={<ServiceMarketplace />} />
      <Route path="/services/logistics" element={<ServiceLogistics />} />
      <Route path="/services/payments" element={<ServicePayments />} />
      <Route path="/services/advisory" element={<ServiceAdvisory />} />
      <Route path="/services/wholesale" element={<ServiceWholesale />} />
      <Route path="/services/verification" element={<ServiceVerification />} />

      {/* ==================== BUYERS ==================== */}
      <Route path="/buyerdashboard" element={<BuyerDashBoard />}>
        <Route index element={<BuyerHome />} />

        {/* Main group */}
        <Route path="marketplace" element={<MarketPlace />} />
        <Route path="orders" element={<Orders />} />
        <Route path="tracking" element={<Tracking />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="messages" element={<BuyerMessages />} />

        {/* Discover group */}
        <Route path="categories" element={<Categories />} />
        <Route path="categories/fruits" element={<Fruits />} />
        <Route path="categories/vegetables" element={<Vegetables />} />
        <Route path="categories/dairy" element={<DairyProducts />} />
        <Route path="nearbyshop" element={<NearbyShop />} />
        <Route path="guides" element={<Guides />} />

        {/* Cart & settings */}
        <Route path="cart" element={<Cart />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* ==================== DELIVERY ==================== */}
      <Route path="/deliverydashboard" element={<DeliveryDashBoard />}>
        <Route index element={<DeliveryHome />} />
        <Route path="activedeliveries" element={<ActiveDeliveries />} />
        <Route path="deliveryhistory" element={<DeliveryHistory />} />
        <Route path="routes" element={<RoutesPage />} />
        <Route path="tracking" element={<DeliveryTracking />} />
        <Route path="messages" element={<DeliveryMessages />} />
        <Route path="guides" element={<DeliveryGuides />} />
        <Route path="faq" element={<DeliveryFaq />} />
        <Route path="tools" element={<ToolsResources />} />
        <Route path="community" element={<DeliveryCommunity />} />
        <Route path="settings" element={<DeliverySettings />} />
      </Route>

      {/* ==================== FARMER ==================== */}
      <Route path="/farmerdashboard" element={<FarmerDashBoard />}>
        <Route index element={<FarmerHome />} />
        <Route path="products" element={<FarmerProducts />} />
        <Route path="orders" element={<FarmerOrders />} />
        <Route path="inventory" element={<FarmerInventory />} />
        <Route path="deliveries" element={<FarmerDeliveries />} />
        <Route path="deliveryhistory" element={<FarmerDeliveryHistory />} />
        <Route path="tracking" element={<FarmerTracking />} />
        <Route path="payments" element={<FarmerPayments />} />
        <Route path="messages" element={<FarmerMessages />} />
        <Route path="categories" element={<FarmerCategories />} />
        <Route path="guides" element={<FarmerGuides />} />
        <Route path="faq" element={<FarmerFaq />} />
        <Route path="community" element={<FarmerCommunity />} />
        <Route path="settings" element={<FarmerSettings />} />
      </Route>

      {/* ==================== MARKET SELLERS (not built yet) ==================== */}
      {/*
      <Route path="/marketsellersdashboard" element={<MarketSellersDashBoard />}>
        <Route index element={<MarketSellersHome />} />
        <Route path="orders" element={<MarketSellersOrders />} />
        <Route path="inventory" element={<MarketSellersInventory />} />
        <Route path="deliveries" element={<MarketSellersDeliveries />} />
        <Route path="deliveryhistory" element={<MarketSellersDeliveryHistory />} />
        <Route path="tracking" element={<MarketSellersTracking />} />
        <Route path="messages" element={<MarketSellersMessages />} />
        <Route path="categories/fruits" element={<MarketSellersCategoriesFruits />} />
        <Route path="categories/vegetables" element={<MarketSellersCategoriesVegetables />} />
        <Route path="categories/dairy" element={<MarketSellersCategoriesDairy />} />
        <Route path="guides" element={<MarketSellersGuides />} />
        <Route path="faq" element={<MarketSellersFaq />} />
        <Route path="community" element={<MarketSellersCommunity />} />
      </Route>
      */}

      {/* ==================== ADMIN (not built yet) ==================== */}
      {/*
      <Route path="/admindashboard" element={<AdminDashboard />}>
        <Route index element={<AdminHome />} />
        <Route path="users" element={<ViewUsers />} />
        <Route path="adduser" element={<AddUser />} />
        <Route path="roles" element={<ManageRoles />} />
        <Route path="market/listings" element={<ViewListings />} />
        <Route path="market/addlisting" element={<AddListing />} />
        <Route path="market/categories" element={<ManageCategories />} />
        <Route path="market/transactions" element={<Transactions />} />
        <Route path="orders" element={<AdminOrders />} />
        <Route path="payments" element={<Payments />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="broadcasts" element={<Broadcasts />} />
        <Route path="business/clients" element={<Clients />} />
        <Route path="business/contracts" element={<Contracts />} />
        <Route path="business/invoices" element={<Invoices />} />
        <Route path="reports" element={<Reports />} />
        <Route path="messages" element={<Messages />} />
        <Route path="knowledgebase" element={<KnowledgeBase />} />
        <Route path="settings/general" element={<GeneralSettings />} />
        <Route path="settings/security" element={<SecuritySettings />} />
        <Route path="settings/apikeys" element={<APIKeys />} />
        <Route path="tools" element={<Tools />} />
      </Route>
      */}

      {/* ==================== PAGE NOT FOUND ==================== */}
      {/* Add a <Route path="*" element={<NotFound />} /> here later */}
    </Routes>
  );
}

export default AppRoutes;