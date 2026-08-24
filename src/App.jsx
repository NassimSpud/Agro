import { useEffect, useState } from "react";
import Routes from "./App/Routes/Routes";
import { FaTimes } from "react-icons/fa"; // Import Font Awesome close icon
import { motion } from "framer-motion"; // Import framer-motion for animations

const App = () => {
  const [isOffline, setIsOffline] = useState(() => !navigator.onLine);
  const [showOnlineMessage, setShowOnlineMessage] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (isDarkMode) => {
      if (isDarkMode) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    const handleThemeChange = (e) => applyTheme(e.matches);

    // Initial check for dark mode preference
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    applyTheme(userPrefersDark);

    // Listen for changes in theme preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleThemeChange);

    // Handlers for offline and online status
    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => {
      setIsOffline(false);
      setShowOnlineMessage(true);
      // Hide the "You're back online" message after 4 seconds
      setTimeout(() => setShowOnlineMessage(false), 4000);
    };

    // Add event listeners for online/offline status
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    // Cleanup listeners on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return (
    <div className="bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText min-h-screen">
      {/* Offline Notification Banner with motion */}
      {isOffline && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 left-4 bg-red-500 bg-opacity-60 text-white p-4 rounded-lg shadow-lg flex items-center space-x-3 z-50 backdrop-blur-md"
        >
          <span>You are offline. Some features may not be available.</span>
          <button
            onClick={() => setIsOffline(false)}
            className="text-white hover:text-gray-200"
          >
            <FaTimes size={16} /> {/* Close icon */}
          </button>
        </motion.div>
      )}

      {/* Temporary "Back Online" Notification with motion */}
      {showOnlineMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 left-4 bg-green-500 bg-opacity-60 text-white p-4 rounded-lg shadow-lg z-50 backdrop-blur-md"
        >
          You're back online!
        </motion.div>
      )}

      <Routes />
    </div>
  );
};

export default App;
