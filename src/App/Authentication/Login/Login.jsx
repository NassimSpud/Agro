import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../../Modules/Users/ThemeToggle";

// ======================== Icons ========================
const BrandIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c-4-1-7-5-7-10a10 10 0 0 1 10-10c1 5 0 9-3 12-1.5 1.5-3.5 2.2-5.5 2.3" />
  </svg>
);

const GoogleIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.24 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.9 1.5l2.6-2.5C16.9 3.3 14.7 2.3 12 2.3 6.9 2.3 2.7 6.5 2.7 11.6S6.9 20.9 12 20.9c6.9 0 8.9-4.9 8.9-7.4 0-.5 0-.9-.1-1.3H12z" />
  </svg>
);

const FacebookIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path fill="#1877F2" d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.16 8.44 9.94v-7.03H7.9v-2.9h2.54V9.86c0-2.5 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.78 8.44-4.94 8.44-9.94z" />
  </svg>
);

const EyeIcon = ({ show, className = "w-[18px] h-[18px]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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

const ChevronIcon = ({ className = "absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const CartIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const UsersIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="3" />
    <path d="M2 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2" />
    <path d="M17 3.5a3 3 0 0 1 0 7" />
  </svg>
);

const PriceIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const LearnIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
    <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
  </svg>
);

const CheckIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

// ======================== Role → Route map ========================
// Single source of truth for where each role lands after auth.
const resolveRole = (role) => {
  const r = String(role || "").trim().toLowerCase();
  switch (r) {
    case "farmer":
    case "seller":
    case "farmer / seller":
      // Farmer dashboard not built yet — fall back to landing page.
      // Change to "/farmerdashboard" once that dashboard is ready.
      console.warn("[Auth] Farmer/Seller dashboard not built yet — routing to landing.");
      return "/";
    case "buyer":
      return "/buyerdashboard";
    case "delivery":
    case "delivery rider":
    case "supplier": // legacy alias
      return "/deliverydashboard";
    case "admin":
      // Admin dashboard not built yet — fall back to landing page.
      console.warn("[Auth] Admin dashboard not built yet — routing to landing.");
      return "/";
    default:
      return "/";
  }
};

// ======================== Component ========================
const Login = ({ setUserId, setRole }) => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const toggleMode = () => {
    setIsLogin((prev) => !prev);
    setError(null);
    setSuccess(null);
  };

  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [registerForm, setRegisterForm] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    role: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

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
      // Mock auth — always logs in as a buyer for demo purposes.
      // Change `role` here to test other dashboards:
      //   "buyer" | "delivery" | "farmer" | "admin"
      const mockData = { user_id: "123", role: "buyer" };

      setUserId?.(mockData.user_id);
      setRole?.(mockData.role);
      sessionStorage.setItem("userId", mockData.user_id);
      localStorage.setItem("userId", mockData.user_id);
      localStorage.setItem("userRole", mockData.role);

      setSuccess("Login successful!");
      setLoading(false);

      navigate(resolveRole(mockData.role));
    }, 1200);
  };

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
      const mockUserId = "456";
      const mockRole = role; // keep original casing for display; resolveRole lowercases internally

      setUserId?.(mockUserId);
      setRole?.(mockRole);
      sessionStorage.setItem("userId", mockUserId);
      localStorage.setItem("userId", mockUserId);
      localStorage.setItem("userRole", mockRole);

      setSuccess("Registration successful! Redirecting...");
      setLoading(false);

      navigate(resolveRole(mockRole));
    }, 1200);
  };

  return (
    <div className="font-body min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      {/* ========== Toasts ========== */}
      {error && (
        <div className="fixed top-6 right-6 z-50 max-w-sm w-full px-5 py-4 rounded-2xl bg-[var(--danger-soft)] text-[var(--danger)] border border-[var(--danger)]/25 shadow-lg flex items-center justify-between gap-3 animate-slideDown backdrop-blur">
          <span className="text-[13px] font-medium">{error}</span>
          <button onClick={() => setError(null)} className="text-xl opacity-60 hover:opacity-100 leading-none">&times;</button>
        </div>
      )}
      {success && !error && (
        <div className="fixed top-6 right-6 z-50 max-w-sm w-full px-5 py-4 rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-fg)] border border-[var(--accent)]/25 shadow-lg flex items-center justify-between gap-3 animate-slideDown backdrop-blur">
          <span className="text-[13px] font-medium">{success}</span>
          <button onClick={() => setSuccess(null)} className="text-xl opacity-60 hover:opacity-100 leading-none">&times;</button>
        </div>
      )}

      {/* ========== Form side ========== */}
      <div className="relative flex items-center justify-center p-6 sm:p-8 lg:p-12 bg-[var(--surface)]">
        <div className="absolute top-5 right-5 sm:top-6 sm:right-6">
          <ThemeToggle />
        </div>

        <div
          key={isLogin ? "login" : "register"}
          className={`w-full ${isLogin ? "max-w-sm" : "max-w-md"} form-animation`}
        >
          {/* Brand */}
          <div className="flex items-center gap-2.5 mb-9">
            <span className="w-9 h-9 rounded-xl bg-[var(--brand)] flex items-center justify-center text-[var(--brand-fg)] shadow-sm">
              <BrandIcon className="w-5 h-5" />
            </span>
            <span className="font-display font-bold text-lg tracking-tight text-[var(--text)]">
              Agri<span className="text-[var(--accent-fg)]">Soko</span>
            </span>
          </div>

          {isLogin ? (
            <>
              <h1 className="font-display text-[26px] sm:text-[28px] font-bold mb-1.5 text-[var(--text)] tracking-tight">
                Welcome back
              </h1>
              <p className="text-[var(--text-muted)] text-sm mb-8">
                Login to your AgriSoko account
              </p>

              <form onSubmit={(e) => e.preventDefault()}>
                <Field label="Email or phone number">
                  <input
                    type="text"
                    name="username"
                    placeholder="you@example.com or +254..."
                    value={loginForm.username}
                    onChange={handleLoginChange}
                    onKeyPress={handleKeyPress}
                    autoComplete="username"
                    required
                    className="input-base"
                  />
                </Field>

                <div className="mb-5">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="block text-[12.5px] font-semibold text-[var(--text-muted)]">
                      Password
                    </span>
                    <button
                      type="button"
                      className="text-[11.5px] text-[var(--accent-fg)] font-semibold hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter your password"
                      value={loginForm.password}
                      onChange={handleLoginChange}
                      onKeyPress={handleKeyPress}
                      autoComplete="current-password"
                      required
                      className="input-base pr-11"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((p) => !p)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-dim)] hover:text-[var(--text-muted)] transition-colors"
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
                  className="w-full py-3.5 mt-1.5 rounded-xl bg-[var(--brand)] text-[var(--brand-fg)] font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm"
                >
                  {loading ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
                      Logging in...
                    </>
                  ) : (
                    "Login"
                  )}
                </button>
              </form>

              <div className="flex items-center gap-3 my-6 text-[var(--text-dim)] text-[11px] uppercase tracking-wider before:content-[''] before:flex-1 before:h-px before:bg-[var(--border)] after:content-[''] after:flex-1 after:h-px after:bg-[var(--border)]">
                <span className="font-semibold">Or continue with</span>
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { label: "Google",   icon: <GoogleIcon /> },
                  { label: "Facebook", icon: <FacebookIcon /> },
                  { label: "Email",    icon: <span className="text-[var(--text-muted)] font-bold text-sm">@</span> },
                ].map((s) => (
                  <button
                    key={s.label}
                    type="button"
                    aria-label={s.label}
                    className="flex items-center justify-center py-3 border border-[var(--border)] rounded-xl bg-[var(--surface-2)] hover:bg-[var(--surface-3)] hover:border-[var(--border-strong)] transition-colors"
                  >
                    {s.icon}
                  </button>
                ))}
              </div>

              <p className="text-center mt-7 text-[13.5px] text-[var(--text-muted)]">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={toggleMode}
                  className="text-[var(--accent-fg)] font-bold hover:underline"
                >
                  Register here
                </button>
              </p>
            </>
          ) : (
            <>
              <h1 className="font-display text-[26px] font-bold mb-1.5 text-[var(--text)] tracking-tight">
                Create your account
              </h1>
              <p className="text-[var(--text-muted)] text-sm mb-6">
                Join AgriSoko today
              </p>

              <form onSubmit={(e) => e.preventDefault()}>
                <Field label="Full name">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="e.g. Wanjiku Kamau"
                    value={registerForm.fullName}
                    onChange={handleRegisterChange}
                    onKeyPress={handleKeyPress}
                    required
                    className="input-base"
                  />
                </Field>

                <Field label="Email or phone number">
                  <input
                    type="text"
                    name="username"
                    placeholder="you@example.com or +254..."
                    value={registerForm.username}
                    onChange={handleRegisterChange}
                    onKeyPress={handleKeyPress}
                    autoComplete="username"
                    required
                    className="input-base"
                  />
                </Field>

                <Field label="Password">
                  <div className="relative">
                    <input
                      type={showRegisterPassword ? "text" : "password"}
                      name="password"
                      placeholder="Create a password"
                      value={registerForm.password}
                      onChange={handleRegisterChange}
                      onKeyPress={handleKeyPress}
                      autoComplete="new-password"
                      required
                      className="input-base pr-11"
                    />
                    <button
                      type="button"
                      onClick={() => setShowRegisterPassword((p) => !p)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-dim)] hover:text-[var(--text-muted)] transition-colors"
                      aria-label="Toggle password visibility"
                    >
                      <EyeIcon show={showRegisterPassword} />
                    </button>
                  </div>
                </Field>

                <Field label="Confirm password">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={registerForm.confirmPassword}
                    onChange={handleRegisterChange}
                    onKeyPress={handleKeyPress}
                    autoComplete="new-password"
                    required
                    className="input-base"
                  />
                </Field>

                <div className="mb-4">
                  <span className="block text-[12.5px] font-semibold text-[var(--text-muted)] mb-1.5">
                    I am a
                  </span>
                  <div className="relative">
                    <select
                      name="role"
                      value={registerForm.role}
                      onChange={handleRegisterChange}
                      required
                      className="input-base appearance-none pr-10"
                    >
                      <option value="" disabled>Select your role</option>
                      <option>Farmer / Seller</option>
                      <option>Buyer</option>
                      <option>Delivery Rider</option>
                    </select>
                    <ChevronIcon className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-dim)] pointer-events-none" />
                  </div>
                </div>

                <label className="flex items-start gap-2.5 my-4 cursor-pointer select-none">
                  <span className="relative flex items-center justify-center w-4 h-4 mt-0.5 flex-none">
                    <input
                      type="checkbox"
                      name="agree"
                      checked={registerForm.agree}
                      onChange={handleRegisterChange}
                      className="peer appearance-none w-4 h-4 rounded border border-[var(--border-strong)] bg-[var(--surface-2)] checked:bg-[var(--brand)] checked:border-[var(--brand)] transition-colors cursor-pointer"
                      required
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-[var(--brand-fg)] opacity-0 peer-checked:opacity-100 pointer-events-none">
                      <CheckIcon className="w-3 h-3" />
                    </span>
                  </span>
                  <span className="text-[12.5px] text-[var(--text-muted)] leading-relaxed">
                    I agree to the{" "}
                    <button type="button" className="text-[var(--accent-fg)] font-semibold hover:underline">
                      Terms & Conditions
                    </button>{" "}
                    and{" "}
                    <button type="button" className="text-[var(--accent-fg)] font-semibold hover:underline">
                      Privacy Policy
                    </button>
                  </span>
                </label>

                <button
                  type="submit"
                  onClick={handleRegister}
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-[var(--brand)] text-[var(--brand-fg)] font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm"
                >
                  {loading ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
                      Creating account...
                    </>
                  ) : (
                    "Create account"
                  )}
                </button>
              </form>

              <p className="text-center mt-6 text-[13.5px] text-[var(--text-muted)]">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={toggleMode}
                  className="text-[var(--accent-fg)] font-bold hover:underline"
                >
                  Login
                </button>
              </p>
            </>
          )}
        </div>
      </div>

      {/* ========== Visual side ========== */}
      <div className="relative overflow-hidden hidden lg:flex items-end p-14 bg-[var(--brand)]">
        <div className="absolute inset-0 opacity-[0.12]" style={{
          background: "radial-gradient(ellipse at 20% 20%, rgba(255,255,255,.4), transparent 45%)",
        }} />
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[var(--highlight)] opacity-20 blur-[100px]" />
        <div className="absolute -bottom-20 -left-10 w-96 h-96 rounded-full bg-[var(--accent)] opacity-15 blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        {isLogin ? (
          <div className="relative z-10 text-[var(--brand-fg)] max-w-md">
            <span className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.18em] text-[var(--highlight)] mb-5">
              <span className="w-6 h-px bg-[var(--highlight)]/50" />
              Welcome back
            </span>
            <h2 className="font-display text-[32px] leading-tight font-bold tracking-[-0.02em]">
              Empowering farmers.
              <br />
              Connecting communities.
              <br />
              <span className="text-[var(--highlight)]">Feeding Kenya.</span>
            </h2>
            <p className="text-[var(--brand-fg)]/70 text-[14px] mt-5 leading-relaxed max-w-sm">
              Over 10,000 farmers and buyers are already trading fairly on AgriSoko.
            </p>
            <div className="flex items-center gap-3 mt-8">
              <div className="flex -space-x-2">
                {["👩🏾‍🌾", "👨🏿‍🌾", "👩🏽‍🌾"].map((e, i) => (
                  <span key={i} className="w-9 h-9 rounded-full bg-[var(--brand-fg)]/15 border-2 border-[var(--brand)] flex items-center justify-center text-base">
                    {e}
                  </span>
                ))}
              </div>
              <span className="text-[12.5px] text-[var(--brand-fg)]/70 font-medium">
                Join the community
              </span>
            </div>
          </div>
        ) : (
          <div className="relative z-10 text-[var(--brand-fg)] max-w-md">
            <span className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.18em] text-[var(--highlight)] mb-5">
              <span className="w-6 h-px bg-[var(--highlight)]/50" />
              Why AgriSoko
            </span>
            <h3 className="font-display text-[28px] font-bold mb-7 tracking-[-0.02em] leading-tight">
              Grow your agribusiness
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                { icon: <CartIcon />,  text: "Sell your farm products easily" },
                { icon: <UsersIcon />, text: "Reach thousands of buyers" },
                { icon: <PriceIcon />, text: "Get the best market prices" },
                { icon: <LearnIcon />, text: "Learn and grow with others" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3.5 text-[13.5px] font-medium text-[var(--brand-fg)]/90">
                  <span className="w-10 h-10 rounded-2xl bg-[var(--brand-fg)]/12 backdrop-blur-sm border border-[var(--brand-fg)]/15 flex items-center justify-center flex-none text-[var(--highlight)]">
                    {item.icon}
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* ========== Fonts & styles ========== */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..800;1,9..144,300..600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .font-display { font-family: 'Fraunces', Georgia, serif; font-variation-settings: 'SOFT' 0, 'WONK' 0; }
        .font-body    { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; }

        .input-base {
          width: 100%;
          background: var(--surface-2);
          border: 1px solid var(--border);
          color: var(--text);
          border-radius: 12px;
          padding: 12px 14px;
          font-size: 13.5px;
          outline: none;
          transition: border-color .15s, background .15s;
        }
        .input-base::placeholder { color: var(--text-dim); }
        .input-base:focus {
          border-color: var(--accent);
          background: var(--surface);
          box-shadow: 0 0 0 3px var(--accent-soft);
        }
        .input-base option {
          background: var(--surface);
          color: var(--text);
        }

        .form-animation { animation: fadeIn 0.3s ease; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown { animation: slideDown 0.3s ease; }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

// ======================== Helpers ========================
const Field = ({ label, children }) => (
  <div className="mb-4">
    <span className="block text-[12.5px] font-semibold text-[var(--text-muted)] mb-1.5">
      {label}
    </span>
    {children}
  </div>
);

export default Login;