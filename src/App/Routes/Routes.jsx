import { Routes, Route } from "react-router-dom";

// Landing & Public Pages
import LandingPage from "../LandingPage/Landing";
import Login from "../Authentication/Login/Login";

// Dashboard Layouts
import BuyerDashBoard from "../Modules/Users/BuyersDashBoard.jsx";

// Buyer Components
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

// Delivery Components
// import DeliveryDashBoard from "../Modules/Users/DeliverersDashBoard.jsx";
// import DeliveryHome from "../Modules/Users/Deliverers/Home/DeliveryHome";
// import ActiveDeliveries from "../Modules/Users/Deliverers/ActiveDeliveries/ActiveDeliveries";
// import WholesaleDeliveries from "../Modules/Users/Deliverers/ActiveDeliveries/WholesaleDeliveries";
// import ConsumerDeliveries from "../Modules/Users/Deliverers/ActiveDeliveries/ConsumerDeliveries";
// import DeliveryHistory from "../Modules/Users/Deliverers/DeliveryHistory/DeliveryHistory";
// import RoutesPage from "../Modules/Users/Deliverers/DeliveryRoutes/RoutesPage";
// import DeliveryTracking from "../Modules/Users/Deliverers/Tracking/DeliveryTracking";
// import DeliveryMessages from "../Modules/Users/Deliverers/Messages/DeliveryMessages";
// import DeliveryGuides from "../Modules/Users/Deliverers/Guides/DeliveryGuides";
// import DeliveryFaq from "../Modules/Users/Deliverers/FAQ/DeliveryFaq";
// import ToolsResources from "../Modules/Users/Deliverers/ToolsResources/ToolsResources";
// import DeliveryCommunity from "../Modules/Users/Deliverers/Community/DeliveryCommunity";

// Farmer Components
// import FarmerDashBoard from "../Modules/Users/FarmersDashBoard.jsx";
// import FarmerHome from "../Modules/Users/Farmers/Home/FarmerHome";
// import FarmerProducts from "../Modules/Users/Farmers/Products/FarmerProducts";
// import FarmerOrders from "../Modules/Users/Farmers/Orders/FarmerOrders";
// import FarmerInventory from "../Modules/Users/Farmers/Inventory/FarmerInventory";
// import FarmerDeliveries from "../Modules/Users/Farmers/Deliveries/FarmerDeliveries";
// import FarmerPayments from "../Modules/Users/Farmers/Payments/FarmerPayments";
// import FarmerDeliveryHistory from "../Modules/Users/Farmers/DeliveryHistory/FarmerDeliveryHistory";
// import FarmerTracking from "../Modules/Users/Farmers/Tracking/FarmerTracking";
// import FarmerMessages from "../Modules/Users/Farmers/Messages/FarmerMessages";
// import FarmerCategories from "../Modules/Users/Farmers/Categories/FarmerCategories";
// import FarmerGuides from "../Modules/Users/Farmers/Guides/FarmerGuides";
// import FarmerFaq from "../Modules/Users/Farmers/FAQ/FarmerFaq";
// import FarmerCommunity from "../Modules/Users/Farmers/Community/FarmerCommunity";

// Market Seller Components
// import MarketSellersDashBoard from "../Modules/Users/MarketSellersDashBoard.jsx";
// import MarketSellersHome from "../Modules/Users/MarketSellers/Home/MarketSellersHome";
// import MarketSellersOrders from "../Modules/Users/MarketSellers/Orders/MarketSellersOrders";
// import MarketSellersInventory from "../Modules/Users/MarketSellers/Inventory/MarketSellersInventory";
// import MarketSellersDeliveries from "../Modules/Users/MarketSellers/Deliveries/MarketSellersDeliveries";
// import MarketSellersDeliveryHistory from "../Modules/Users/MarketSellers/DeliveryHistory/MarketSellersDeliveryHistory";
// import MarketSellersTracking from "../Modules/Users/MarketSellers/Tracking/MarketSellersTracking";
// import MarketSellersMessages from "../Modules/Users/MarketSellers/Messages/MarketSellersMessages";
// import MarketSellersCategoriesFruits from "../Modules/Users/MarketSellers/Categories/MarketSellersCategoriesFruits";
// import MarketSellersCategoriesVegetables from "../Modules/Users/MarketSellers/Categories/MarketSellersCategoriesVegetables";
// import MarketSellersCategoriesDairy from "../Modules/Users/MarketSellers/Categories/MarketSellersCategoriesDairy";
// import MarketSellersGuides from "../Modules/Users/MarketSellers/Guides/MarketSellersGuides";
// import MarketSellersFaq from "../Modules/Users/MarketSellers/FAQ/MarketSellersFaq";
// import MarketSellersCommunity from "../Modules/Users/MarketSellers/Community/MarketSellersCommunity";

// Admin Components
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

function AppRoutes() {
  return (
    <Routes>
      {/* ==================== PUBLIC ==================== */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<Login />} />

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
      {/* <Route path="/deliverydashboard" element={<DeliveryDashBoard />}>
        <Route index element={<DeliveryHome />} />
        <Route path="activedeliveries" element={<ActiveDeliveries />} />
        <Route path="activedeliveries/wholesale" element={<WholesaleDeliveries />} />
        <Route path="activedeliveries/consumer" element={<ConsumerDeliveries />} />
        <Route path="deliveryhistory" element={<DeliveryHistory />} />
        <Route path="routes" element={<RoutesPage />} />
        <Route path="tracking" element={<DeliveryTracking />} />
        <Route path="messages" element={<DeliveryMessages />} />
        <Route path="guides" element={<DeliveryGuides />} />
        <Route path="faq" element={<DeliveryFaq />} />
        <Route path="tools" element={<ToolsResources />} />
        <Route path="community" element={<DeliveryCommunity />} />
      </Route> */}

      {/* ==================== FARMER ==================== */}
      {/* <Route path="/farmerdashboard" element={<FarmerDashBoard />}>
        <Route index element={<FarmerHome />} />
        <Route path="products" element={<FarmerProducts />} />
        <Route path="orders" element={<FarmerOrders />} />
        <Route path="inventory" element={<FarmerInventory />} />
        <Route path="deliveries" element={<FarmerDeliveries />} />
        <Route path="payments" element={<FarmerPayments />} />
        <Route path="deliveryhistory" element={<FarmerDeliveryHistory />} />
        <Route path="tracking" element={<FarmerTracking />} />
        <Route path="messages" element={<FarmerMessages />} />
        <Route path="categories" element={<FarmerCategories />} />
        <Route path="guides" element={<FarmerGuides />} />
        <Route path="faq" element={<FarmerFaq />} />
        <Route path="community" element={<FarmerCommunity />} />
      </Route> */}

      {/* ==================== MARKET SELLERS ==================== */}
      {/* <Route path="/marketsellersdashboard" element={<MarketSellersDashBoard />}>
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
      </Route> */}

      {/* ==================== ADMIN ==================== */}
      {/* <Route path="/admindashboard" element={<AdminDashboard />}>
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
      </Route> */}

      {/* ==================== PAGE NOT FOUND ==================== */}
      {/* Add a <Route path="*" element={<NotFound />} /> here later */}
    </Routes>
  );
}

export default AppRoutes;