import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// ======================== Icons ========================
const BrandIcon = () => (
  <svg className="w-6 h-6 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c-4-1-7-5-7-10a10 10 0 0 1 10-10c1 5 0 9-3 12-1.5 1.5-3.5 2.2-5.5 2.3" />
  </svg>
);

const LeafIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c-4-1-7-5-7-10a10 10 0 0 1 10-10c1 5 0 9-3 12-1.5 1.5-3.5 2.2-5.5 2.3" />
  </svg>
);

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.24 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.9 1.5l2.6-2.5C16.9 3.3 14.7 2.3 12 2.3 6.9 2.3 2.7 6.5 2.7 11.6S6.9 20.9 12 20.9c6.9 0 8.9-4.9 8.9-7.4 0-.5 0-.9-.1-1.3H12z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path fill="#1877F2" d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.16 8.44 9.94v-7.03H7.9v-2.9h2.54V9.86c0-2.5 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.78 8.44-4.94 8.44-9.94z" />
  </svg>
);

const AppleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path fill="#000" d="M16.7 12.4c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.1 2.5-1.8 3.1-.5 7.6 1.3 10.1.9 1.2 1.9 2.6 3.2 2.5 1.3-.1 1.8-.8 3.3-.8s2 .8 3.3.8c1.4 0 2.3-1.2 3.1-2.5.7-1 1.1-2 1.4-2.8-3-.9-2.8-4-2.8-4.9zm-2.6-7.1c.7-.8 1.1-1.9 1-3-1 0-2.1.6-2.8 1.4-.6.7-1.1 1.8-1 2.9 1.1.1 2.1-.5 2.8-1.3z" />
  </svg>
);

const EyeIcon = ({ show }) => (
  <svg className="w-4.5 h-4.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {show ? (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ) : (
      <>
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </>
    )}
  </svg>
);

const ChevronIcon = () => (
  <svg className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const CartIcon = () => (
  <svg className="w-4.5 h-4.5 text-[#8FE3A8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3h2l2.6 13.4a2 2 0 0 0 2 1.6h9a2 2 0 0 0 2-1.6L23 6H6" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-4.5 h-4.5 text-[#8FE3A8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="3" />
    <path d="M2 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2" />
    <path d="M17 3.5a3 3 0 0 1 0 7" />
  </svg>
);

const PriceIcon = () => (
  <svg className="w-4.5 h-4.5 text-[#8FE3A8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const LearnIcon = () => (
  <svg className="w-4.5 h-4.5 text-[#8FE3A8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
    <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
  </svg>
);

// ======================== Component ========================
const Login = ({ setUserId, setRole }) => {
  const navigate = useNavigate();

  // Toggle between login and register
  const [isLogin, setIsLogin] = useState(true);
  const toggleMode = () => {
    setIsLogin((prev) => !prev);
    setError(null);
    setSuccess(null);
  };

  // Form states
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [registerForm, setRegisterForm] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    role: "",
    agree: false,
  });

  // UI states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

  // Handlers
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegisterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (isLogin) handleLogin();
      else handleRegister();
    }
  };

  // Mock Login
  const handleLogin = async () => {
    const { username, password } = loginForm;
    if (!username || !password) {
      setError("Email or phone number and password are required.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    setTimeout(() => {
      const mockData = {
        user_id: "123",
        role: "buyer", // change to "seller", "admin", or "delivery" to test redirects
      };

      setUserId?.(mockData.user_id);
      setRole?.(mockData.role);
      sessionStorage.setItem("userId", mockData.user_id);
      localStorage.setItem("userId", mockData.user_id);

      setSuccess("Login successful!");
      setLoading(false);

      switch (mockData.role.toLowerCase()) {
        case "seller":
          navigate("/farmersdashboard");
          break;
        case "admin":
          navigate("/admindashboard");
          break;
        case "buyer":
          navigate("/buyerdashboard");
          break;
        case "delivery":
          navigate("/deliverydashboard");
          break;
        default:
          navigate("/");
      }
    }, 1200);
  };

  // Mock Register
  const handleRegister = async () => {
    const { fullName, username, password, confirmPassword, role, agree } = registerForm;

    if (!fullName || !username || !password || !confirmPassword || !role) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!agree) {
      setError("You must agree to the Terms & Conditions.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    setTimeout(() => {
      // Simulate successful registration, then auto-login
      const mockUserId = "456"; // new user ID
      const mockRole = role.toLowerCase(); // use selected role

      setUserId?.(mockUserId);
      setRole?.(mockRole);
      sessionStorage.setItem("userId", mockUserId);
      localStorage.setItem("userId", mockUserId);

      setSuccess("Registration successful! Redirecting...");
      setLoading(false);

      // Redirect based on role
      switch (mockRole) {
        case "farmer / seller":
          navigate("/farmersdashboard");
          break;
        case "buyer":
          navigate("/buyerdashboard");
          break;
        case "supplier":
          navigate("/marketsellersdashboard");
          break;
        default:
          navigate("/");
      }
    }, 1200);
  };

  return (
    <div className="font-body text-gray-900 min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* ========== Toast Notifications ========== */}
      {error && (
        <div className="fixed top-6 right-6 z-50 max-w-sm w-full px-5 py-4 rounded-lg bg-red-50 text-red-800 border-l-4 border-red-600 shadow-md flex items-center justify-between gap-3 animate-slideDown">
          <span>{error}</span>
          <button onClick={() => setError(null)} className="text-xl opacity-60 hover:opacity-100">&times;</button>
        </div>
      )}
      {success && !error && (
        <div className="fixed top-6 right-6 z-50 max-w-sm w-full px-5 py-4 rounded-lg bg-green-50 text-green-800 border-l-4 border-green-500 shadow-md flex items-center justify-between gap-3 animate-slideDown">
          <span>{success}</span>
          <button onClick={() => setSuccess(null)} className="text-xl opacity-60 hover:opacity-100">&times;</button>
        </div>
      )}

      {/* ========== Form Side ========== */}
      <div className="flex items-center justify-center p-8 lg:p-12 bg-white">
        <div
          key={isLogin ? "login" : "register"}
          className={`w-full ${isLogin ? "max-w-sm" : "max-w-md"} form-animation`}
        >
          {/* Brand */}
          <div className="flex items-center gap-2 mb-9">
            <BrandIcon />
            <span className="font-display font-bold text-lg text-green-900">AgriSoko</span>
          </div>

          {isLogin ? (
            <>
              <h1 className="font-display text-[28px] font-bold mb-1.5">Welcome Back!</h1>
              <p className="text-gray-500 text-sm mb-8">Login to your AgriSoko account</p>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-4">
                  <label htmlFor="login-username" className="block text-[13px] font-semibold text-gray-600 mb-1.5">
                    Email or Phone Number
                  </label>
                  <input
                    type="text"
                    id="login-username"
                    name="username"
                    placeholder="Enter email or phone number"
                    value={loginForm.username}
                    onChange={handleLoginChange}
                    onKeyPress={handleKeyPress}
                    autoComplete="username"
                    required
                    className="w-full px-3.5 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 bg-[#FCFCFB] focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100 outline-none transition-all duration-150 placeholder-gray-400"
                  />
                </div>

                <div className="mb-5">
                  <div className="flex justify-between items-center mb-1.5">
                    <label htmlFor="login-password" className="text-[13px] font-semibold text-gray-600">
                      Password
                    </label>
                    <Link to="/forgotpassword" className="text-xs text-green-700 font-semibold hover:underline">
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="login-password"
                      name="password"
                      placeholder="Enter your password"
                      value={loginForm.password}
                      onChange={handleLoginChange}
                      onKeyPress={handleKeyPress}
                      autoComplete="current-password"
                      required
                      className="w-full px-3.5 py-3 pr-10 border border-gray-300 rounded-lg text-sm text-gray-900 bg-[#FCFCFB] focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100 outline-none transition-all duration-150 placeholder-gray-400"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      aria-label="Toggle password visibility"
                    >
                      <EyeIcon show={showPassword} />
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  onClick={handleLogin}
                  disabled={loading}
                  className="w-full py-3.5 mt-1.5 rounded-lg bg-gradient-to-b from-green-700 to-green-800 text-white font-bold text-sm shadow-sm cursor-pointer hover:from-green-800 hover:to-green-900 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      Logging in...
                    </>
                  ) : (
                    "Login"
                  )}
                </button>
              </form>

              <div className="flex items-center gap-3 my-6 text-gray-500 text-xs before:content-[''] before:flex-1 before:h-px before:bg-gray-300 after:content-[''] after:flex-1 after:h-px after:bg-gray-300">
                or continue with
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                <button type="button" className="flex items-center justify-center py-2.5 border border-gray-300 rounded-lg bg-white cursor-pointer hover:bg-gray-50" aria-label="Google">
                  <GoogleIcon />
                </button>
                <button type="button" className="flex items-center justify-center py-2.5 border border-gray-300 rounded-lg bg-white cursor-pointer hover:bg-gray-50" aria-label="Facebook">
                  <FacebookIcon />
                </button>
                <button type="button" className="flex items-center justify-center py-2.5 border border-gray-300 rounded-lg bg-white cursor-pointer hover:bg-gray-50" aria-label="Apple">
                  <AppleIcon />
                </button>
              </div>

              <p className="text-center mt-7 text-sm text-gray-600">
                Don't have an account?{" "}
                <a href="#" onClick={toggleMode} className="text-green-700 font-bold hover:underline">
                  Register here
                </a>
              </p>
            </>
          ) : (
            <>
              <h1 className="font-display text-[26px] font-bold mb-1.5">Create Your Account</h1>
              <p className="text-gray-500 text-sm mb-6">Join AgriSoko today</p>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3.5">
                  <label htmlFor="reg-fullname" className="block text-[13px] font-semibold text-gray-600 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="reg-fullname"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={registerForm.fullName}
                    onChange={handleRegisterChange}
                    onKeyPress={handleKeyPress}
                    required
                    className="w-full px-3.5 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 bg-[#FCFCFB] focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100 outline-none transition-all duration-150 placeholder-gray-400"
                  />
                </div>

                <div className="mb-3.5">
                  <label htmlFor="reg-username" className="block text-[13px] font-semibold text-gray-600 mb-1.5">
                    Email or Phone Number
                  </label>
                  <input
                    type="text"
                    id="reg-username"
                    name="username"
                    placeholder="Enter email or phone number"
                    value={registerForm.username}
                    onChange={handleRegisterChange}
                    onKeyPress={handleKeyPress}
                    autoComplete="username"
                    required
                    className="w-full px-3.5 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 bg-[#FCFCFB] focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100 outline-none transition-all duration-150 placeholder-gray-400"
                  />
                </div>

                <div className="mb-3.5">
                  <label htmlFor="reg-password" className="block text-[13px] font-semibold text-gray-600 mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showRegisterPassword ? "text" : "password"}
                      id="reg-password"
                      name="password"
                      placeholder="Create a password"
                      value={registerForm.password}
                      onChange={handleRegisterChange}
                      onKeyPress={handleKeyPress}
                      autoComplete="new-password"
                      required
                      className="w-full px-3.5 py-3 pr-10 border border-gray-300 rounded-lg text-sm text-gray-900 bg-[#FCFCFB] focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100 outline-none transition-all duration-150 placeholder-gray-400"
                    />
                    <button
                      type="button"
                      onClick={() => setShowRegisterPassword((prev) => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      aria-label="Toggle password visibility"
                    >
                      <EyeIcon show={showRegisterPassword} />
                    </button>
                  </div>
                </div>

                <div className="mb-3.5">
                  <label htmlFor="reg-confirm" className="block text-[13px] font-semibold text-gray-600 mb-1.5">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="reg-confirm"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={registerForm.confirmPassword}
                    onChange={handleRegisterChange}
                    onKeyPress={handleKeyPress}
                    autoComplete="new-password"
                    required
                    className="w-full px-3.5 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 bg-[#FCFCFB] focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100 outline-none transition-all duration-150 placeholder-gray-400"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="reg-role" className="block text-[13px] font-semibold text-gray-600 mb-1.5">
                    I am a
                  </label>
                  <div className="relative">
                    <select
                      id="reg-role"
                      name="role"
                      value={registerForm.role}
                      onChange={handleRegisterChange}
                      required
                      className="w-full px-3.5 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 bg-[#FCFCFB] focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100 outline-none transition-all duration-150 appearance-none"
                    >
                      <option value="" disabled>Select your role</option>
                      <option>Farmer / Seller</option>
                      <option>Buyer</option>
                      <option>Supplier</option>
                    </select>
                    <ChevronIcon />
                  </div>
                </div>

                <div className="flex items-start gap-2 my-4 text-xs text-gray-600">
                  <input
                    type="checkbox"
                    id="reg-agree"
                    name="agree"
                    checked={registerForm.agree}
                    onChange={handleRegisterChange}
                    className="w-4 h-4 mt-0.5 flex-none"
                    required
                  />
                  <label htmlFor="reg-agree">
                    I agree to the <a href="#" className="text-green-700 font-semibold hover:underline">Terms &amp; Conditions</a> and{" "}
                    <a href="#" className="text-green-700 font-semibold hover:underline">Privacy Policy</a>
                  </label>
                </div>

                <button
                  type="submit"
                  onClick={handleRegister}
                  disabled={loading}
                  className="w-full py-3.5 rounded-lg bg-gradient-to-b from-green-700 to-green-800 text-white font-bold text-sm shadow-sm cursor-pointer hover:from-green-800 hover:to-green-900 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      Registering...
                    </>
                  ) : (
                    "Register"
                  )}
                </button>
              </form>

              <p className="text-center mt-6 text-sm text-gray-600">
                Already have an account?{" "}
                <a href="#" onClick={toggleMode} className="text-green-700 font-bold hover:underline">
                  Login
                </a>
              </p>
            </>
          )}
        </div>
      </div>

      {/* ========== Visual Side ========== */}
      <div
        className={`relative overflow-hidden flex items-end p-14 ${
          isLogin
            ? "bg-gradient-to-br from-[#3C6B4A] via-[#274A32] to-[#132A1B]"
            : "bg-gradient-to-br from-[#4A7A57] via-[#25492F] to-[#0F2416]"
        }`}
      >
        <div
          className="absolute inset-0"
          style={{
            background: isLogin
              ? "radial-gradient(ellipse at 20% 20%, rgba(255,255,255,.10), transparent 40%), repeating-linear-gradient(120deg, rgba(255,255,255,.03) 0 2px, transparent 2px 40px)"
              : "radial-gradient(ellipse at 75% 30%, rgba(255,255,255,.10), transparent 45%)",
          }}
        />
        <div
          className="absolute left-0 right-0 bottom-0"
          style={{
            height: isLogin ? "55%" : "60%",
            background: isLogin
              ? "linear-gradient(0deg, rgba(6,16,10,.75), transparent)"
              : "linear-gradient(0deg, rgba(5,14,9,.8), transparent)",
          }}
        />

        {isLogin ? (
          <div className="relative z-10 text-white max-w-[360px]">
            <h2 className="font-display text-[28px] leading-snug font-semibold">
              Empowering farmers.
              <br />
              Connecting communities.
              <br />
              Feeding Kenya.
              <span className="inline-flex ml-2 text-[#8FE3A8] align-middle">
                <LeafIcon />
              </span>
            </h2>
          </div>
        ) : (
          <>
            <div className="absolute right-[8%] bottom-0 w-[280px] h-[400px] z-[1] bg-gradient-to-b from-[#C79A6B] to-[#8A6440] rounded-t-[140px] opacity-90" />
            <div className="relative z-10 text-white p-14 max-w-[300px]">
              <h3 className="font-display text-2xl font-bold mb-5">Why Join AgriSoko?</h3>
              <ul className="list-none flex flex-col gap-4">
                <li className="flex items-center gap-3 text-sm font-medium">
                  <span className="w-9 h-9 rounded-[10px] bg-white/15 flex items-center justify-center flex-none backdrop-blur-sm">
                    <CartIcon />
                  </span>
                  Sell your farm products easily
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <span className="w-9 h-9 rounded-[10px] bg-white/15 flex items-center justify-center flex-none backdrop-blur-sm">
                    <UsersIcon />
                  </span>
                  Reach thousands of buyers
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <span className="w-9 h-9 rounded-[10px] bg-white/15 flex items-center justify-center flex-none backdrop-blur-sm">
                    <PriceIcon />
                  </span>
                  Get the best market prices
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <span className="w-9 h-9 rounded-[10px] bg-white/15 flex items-center justify-center flex-none backdrop-blur-sm">
                    <LearnIcon />
                  </span>
                  Learn and grow with others
                </li>
              </ul>
            </div>
          </>
        )}
      </div>

      {/* Font import and custom animation */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap');
        .font-display { font-family: 'Poppins', system-ui, sans-serif; }
        .font-body { font-family: 'Inter', system-ui, sans-serif; }
        .form-animation { animation: fadeIn 0.3s ease; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Login;