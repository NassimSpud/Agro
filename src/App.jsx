import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Routes from "./App/Routes/Routes";
import StoreContextProvider from "./App/Modules/Buyers/Header/Cart/StoreContext";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  const [isOffline, setIsOffline] = useState(() => !navigator.onLine);
  const [showOnlineMessage, setShowOnlineMessage] = useState(false);

  useEffect(() => {
    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => {
      setIsOffline(false);
      setShowOnlineMessage(true);
      setTimeout(() => setShowOnlineMessage(false), 4000);
    };
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return (
    <ThemeProvider>
      <StoreContextProvider>
        <div className="bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText min-h-screen transition-colors duration-300">
          {isOffline && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              className="fixed bottom-4 left-4 bg-red-500/60 text-white p-4 rounded-lg shadow-lg flex items-center space-x-3 z-50 backdrop-blur-md"
            >
              <span>You are offline. Some features may not be available.</span>
              <button onClick={() => setIsOffline(false)} className="text-white hover:text-gray-200">
                <FaTimes size={16} />
              </button>
            </motion.div>
          )}
          {showOnlineMessage && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="fixed bottom-4 left-4 bg-green-500/60 text-white p-4 rounded-lg shadow-lg z-50 backdrop-blur-md"
            >
              You're back online!
            </motion.div>
          )}
          <Routes />
        </div>
      </StoreContextProvider>
    </ThemeProvider>
  );
};

export default App;