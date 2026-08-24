import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "../PageNotFound/PageNotFound";
import LandingPage from "../LandingPage/Landing";
import Login from "../Authentication/Login/loginPage/Login";
import Faq from "../LandingPage/LandingSection/FAQ/Faq.jsx";
import ProductPage from "../LandingPage/Pages/Product/ProductPage";
import FarmerPage from "../LandingPage/Pages/Famers/FamerPage";
import MarketPage from "../LandingPage/Pages/Market/MarketPage";
import AboutUsPage from "../LandingPage/Pages/Aboutus/AboutUs";
import ArticlePage from "../LandingPage/Pages/Article/ArticlePage";
import BuyerDashBoard from "../Modules/Users/Buyers/BuyersDashBoard";
import DeliveryDashBoard from "../Modules/Users/Deliverers/DeliverersDashBoard";
import MarketSellersDashBoard from "../Modules/Users/MarketSellers/MarketSellersDashBoard";
import FarmerDashBoard from "../Modules/Users/Farmers/FarmersDashBoard";
import BuyerHome from "../Modules/Users/Buyers/Home/BuyerHome";
import MarketPlace from "../Modules/Users/Buyers/MarketPlace/MarketPlace";
import Orders from "../Modules/Users/Buyers/Orders/Orders";
import Tracking from "../Modules/Users/Buyers/Tracking/Tracking";
import Favorites from "../Modules/Users/Buyers/Favorites/Favorites";
import Fruits from "../Modules/Users/Buyers/Categories/Fruits";
import Vegetables from "../Modules/Users/Buyers/Categories/Vegetables";
import DairyProducts from "../Modules/Users/Buyers/Categories/DairyProducts";
import Guides from "../Modules/Users/Buyers/Guides/Guides";
import BuyerFaq from "../Modules/Users/Buyers/FAQ/Faq";
import BuyerMessages from "../Modules/Users/Buyers/Messages/BuyerMessage";
import BuyerCommunity from "../Modules/Users/Buyers/Community/BuyerCommunity";
import OrderHistory from "../Modules/Users/Buyers/OrderHistory/OrderHistory";
import DeliveryHome from "../Modules/Users/Deliverers/Home/DeliveryHome";
import ActiveDeliveries from "../Modules/Users/Deliverers/ActiveDeliveries/ActiveDeliveries";
import WholesaleDeliveries from "../Modules/Users/Deliverers/ActiveDeliveries/WholesaleDeliveries";
import ConsumerDeliveries from "../Modules/Users/Deliverers/ActiveDeliveries/ConsumerDeliveries";
import DeliveryHistory from "../Modules/Users/Deliverers/DeliveryHistory/DeliveryHistory";
import RoutesPage from "../Modules/Users/Deliverers/DeliveryRoutes/RoutesPage";
import DeliveryTracking from "../Modules/Users/Deliverers/Tracking/DeliveryTracking";
import DeliveryMessages from "../Modules/Users/Deliverers/Messages/DeliveryMessages";
import DeliveryGuides from "../Modules/Users/Deliverers/Guides/DeliveryGuides";
import DeliveryFaq from "../Modules/Users/Deliverers/FAQ/DeliveryFaq";
import ToolsResources from "../Modules/Users/Deliverers/ToolsResources/ToolsResources";
import DeliveryCommunity from "../Modules/Users/Deliverers/Community/DeliveryCommunity";
import FarmerHome from "../Modules/Users/Farmers/Home/FarmerHome";
import FarmerProducts from "../Modules/Users/Farmers/Products/FarmerProducts";
import FarmerOrders from "../Modules/Users/Farmers/Orders/FarmerOrders";
import FarmerInventory from "../Modules/Users/Farmers/Inventory/FarmerInventory";
import FarmerDeliveries from "../Modules/Users/Farmers/Deliveries/FarmerDeliveries";
import FarmerPayments from "../Modules/Users/Farmers/Payments/FarmerPayments";
import FarmerDeliveryHistory from "../Modules/Users/Farmers/DeliveryHistory/FarmerDeliveryHistory";
import FarmerTracking from "../Modules/Users/Farmers/Tracking/FarmerTracking";
import FarmerMessages from "../Modules/Users/Farmers/Messages/FarmerMessages";
import FarmerCategories from "../Modules/Users/Farmers/Categories/FarmerCategories";
import FarmerGuides from "../Modules/Users/Farmers/Guides/FarmerGuides";
import FarmerFaq from "../Modules/Users/Farmers/FAQ/FarmerFaq";
import FarmerCommunity from "../Modules/Users/Farmers/Community/FarmerCommunity";
import MarketSellersHome from "../Modules/Users/MarketSellers/Home/MarketSellersHome";
import MarketSellersOrders from "../Modules/Users/MarketSellers/Orders/MarketSellersOrders";
import MarketSellersInventory from "../Modules/Users/MarketSellers/Inventory/MarketSellersInventory";
import MarketSellersDeliveries from "../Modules/Users/MarketSellers/Deliveries/MarketSellersDeliveries";
import MarketSellersDeliveryHistory from "../Modules/Users/MarketSellers/DeliveryHistory/MarketSellersDeliveryHistory";
import MarketSellersTracking from "../Modules/Users/MarketSellers/Tracking/MarketSellersTracking";
import MarketSellersMessages from "../Modules/Users/MarketSellers/Messages/MarketSellersMessages";
import MarketSellersCategoriesFruits from "../Modules/Users/MarketSellers/Categories/MarketSellersCategoriesFruits";
import MarketSellersCategoriesVegetables from "../Modules/Users/MarketSellers/Categories/MarketSellersCategoriesVegetables";
import MarketSellersCategoriesDairy from "../Modules/Users/MarketSellers/Categories/MarketSellersCategoriesDairy";
import MarketSellersGuides from "../Modules/Users/MarketSellers/Guides/MarketSellersGuides";
import MarketSellersFaq from "../Modules/Users/MarketSellers/FAQ/MarketSellersFaq";
import MarketSellersCommunity from "../Modules/Users/MarketSellers/Community/MarketSellersCommunity";
import SchoolDashboard from "../Modules/Users/School/SchoolDashBoard";
import SchoolHome from "../Modules/Users/School/Home/SchoolHome";
import OngoingProjects from "../Modules/Users/School/Projects/OngoingProjects";
import CompletedProjects from "../Modules/Users/School/Projects/CompletedProjects";
import SalesHistory from "../Modules/Users/School/SalesHistory/SalesHistory";
import TrackProfits from "../Modules/Users/School/TrackProfits/TrackProfits";
import SchoolMessages from "../Modules/Users/School/Messages/SchoolMessages";
import SchoolCommunity from "../Modules/Users/School/Community/SchoolCommunity";
import SchoolFaq from "../Modules/Users/School/FAQ/SchoolFaq";
import SchoolGuides from "../Modules/Users/School/Guides/SchoolGuides";
import Courses from "../Modules/Users/School/Courses/Courses";
import Teachers from "../Modules/Users/School/Teachers/Teachers";
import Schedule from "../Modules/Users/School/Schedule/Schedule";
import MyMassage from "../Modules/Users/Buyers/Messages/m/BuyerMessage"
import AdminDashboard from "../Modules/Administrator/AdminDashboard";
import AdminHome from "../Modules/Administrator/Home/Home";
import ViewUsers from "../Modules/Administrator/UserManagement/ViewUsers";
import AddUser from "../Modules/Administrator/UserManagement/AddUser";
import ManageRoles from "../Modules/Administrator/UserManagement/ManageRoles";
import ViewListings from "../Modules/Administrator/Market/ViewListings";
import AddListing from "../Modules/Administrator/Market/AddListing";
import ManageCategories from "../Modules/Administrator/Market/ManageCategories";
import Transactions from "../Modules/Administrator/Market/Transactions";
import AdminOrders from "../Modules/Administrator/Orders/Orders";
import Payments from "../Modules/Administrator/Payments/Payments";
import Notifications from "../Modules/Administrator/Notifications/Notifications";
import Broadcasts from "../Modules/Administrator/Broadcasts/Broadcasts";
import Clients from "../Modules/Administrator/BusinessManagement/Clients";
import Contracts from "../Modules/Administrator/BusinessManagement/Contracts";
import Invoices from "../Modules/Administrator/BusinessManagement/Invoices";
import Reports from "../Modules/Administrator/Reports/Reports";
import Messages from "../Modules/Administrator/Messages/Messages";
import KnowledgeBase from "../Modules/Administrator/KnowledgeBase/KnowledgeBase";
import GeneralSettings from "../Modules/Administrator/SystemSettings/GeneralSettings";
import SecuritySettings from "../Modules/Administrator/SystemSettings/SecuritySettings";
import APIKeys from "../Modules/Administrator/SystemSettings/APIKeys";
import Tools from "../Modules/Administrator/Tools/Tools";
import Cart from "../Modules/Users/Buyers/Header/Cart/Cart";
import NearbyShop from "../Modules/Users/Buyers/NearbyShop/NearbyShop";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<PageNotFound />} />

        <Route path="/owen" element={<MyMassage />} />
        {/* LANDING */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/farmerpage" element={<FarmerPage />} />
        <Route path="/marketpage" element={<MarketPage />} />
        <Route path="/aboutuspage" element={<AboutUsPage />} />
        <Route path="/articlepage" element={<ArticlePage />} />
        {/* BUYERS */}
        <Route path="/buyerdashboard" element={<BuyerDashBoard />}>
          <Route index element={<BuyerHome />} />
          <Route path="marketplace" element={<MarketPlace />} />
          <Route path="orders" element={<Orders />} />
          <Route path="tracking" element={<Tracking />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="categories/fruits" element={<Fruits />} />
          <Route path="categories/vegetables" element={<Vegetables />} />
          <Route path="categories/dairy" element={<DairyProducts />} />
          <Route path="guides" element={<Guides />} />
          <Route path="faq" element={<BuyerFaq />} />
          <Route path="messages" element={<BuyerMessages />} />
          <Route path="community" element={<BuyerCommunity />} />
          <Route path="orderhistory" element={<OrderHistory />} />
          <Route path="cart" element={<Cart />} />
          <Route path="nearbyshop" element={<NearbyShop />} />
        </Route>
        {/* DELIVERY */}
        <Route path="/deliverydashboard" element={<DeliveryDashBoard />}>
          <Route index element={<DeliveryHome />} />
          <Route path="activedeliveries" element={<ActiveDeliveries />} />
          <Route
            path="activedeliveries/wholesale"
            element={<WholesaleDeliveries />}
          />
          <Route
            path="activedeliveries/consumer"
            element={<ConsumerDeliveries />}
          />
          <Route path="deliveryhistory" element={<DeliveryHistory />} />
          <Route path="routes" element={<RoutesPage />} />
          <Route path="tracking" element={<DeliveryTracking />} />
          <Route path="messages" element={<DeliveryMessages />} />
          <Route path="guides" element={<DeliveryGuides />} />
          <Route path="faq" element={<DeliveryFaq />} />
          <Route path="tools" element={<ToolsResources />} />
          <Route path="community" element={<DeliveryCommunity />} />
        </Route>
        {/* MARKET */}
        <Route
          path="/marketsellersdashboard"
          element={<MarketSellersDashBoard />}
        >
          <Route index element={<MarketSellersHome />} />
          <Route path="orders" element={<MarketSellersOrders />} />
          <Route path="inventory" element={<MarketSellersInventory />} />
          <Route path="deliveries" element={<MarketSellersDeliveries />} />
          <Route
            path="deliveryhistory"
            element={<MarketSellersDeliveryHistory />}
          />
          <Route path="tracking" element={<MarketSellersTracking />} />
          <Route path="messages" element={<MarketSellersMessages />} />
          <Route
            path="categories/fruits"
            element={<MarketSellersCategoriesFruits />}
          />
          <Route
            path="categories/vegetables"
            element={<MarketSellersCategoriesVegetables />}
          />
          <Route
            path="categories/dairy"
            element={<MarketSellersCategoriesDairy />}
          />
          <Route path="guides" element={<MarketSellersGuides />} />
          <Route path="faq" element={<MarketSellersFaq />} />
          <Route path="community" element={<MarketSellersCommunity />} />
        </Route>
        {/* FARMER */}
        <Route path="/farmerdashboard" element={<FarmerDashBoard />}>
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
        </Route>
        {/* SCHOOL */}
        <Route path="/schooldashboard" element={<SchoolDashboard />}>
          <Route index element={<SchoolHome />} />
          <Route path="ongoingprojects" element={<OngoingProjects />} />
          <Route path="completedprojects" element={<CompletedProjects />} />
          <Route path="saleshistory" element={<SalesHistory />} />
          <Route path="trackprofits" element={<TrackProfits />} />
          <Route path="messages" element={<SchoolMessages />} />
          <Route path="community" element={<SchoolCommunity />} />
          <Route path="faq" element={<SchoolFaq />} />
          <Route path="guides" element={<SchoolGuides />} />
          <Route path="courses" element={<Courses />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="schedule" element={<Schedule />} />
        </Route>
        {/*ADMIN */}
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
      </Routes>
    </Router>
  );
}

export default AppRoutes;
