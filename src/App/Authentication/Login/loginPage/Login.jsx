import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setUserId, setRole }) => {
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleLogin();
    }
  };

  // ----- Mock login (simulates API) -----
  const handleLogin = async () => {
    if (!loginFormData.username || !loginFormData.password) {
      setError("Email or phone number and password are required.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    // Simulate network delay
    setTimeout(() => {
      // Dummy validation: accept any non‑empty credentials
      // For demo, we always succeed and assign role "buyer"
      const mockData = {
        user_id: "123",
        role: "buyer",   // change to "seller", "admin", or "delivery" to test redirects
      };

      // Simulate success
      setUserId(mockData.user_id);
      setRole(mockData.role);
      sessionStorage.setItem("userId", mockData.user_id);
      localStorage.setItem("userId", mockData.user_id);

      setSuccess("Login successful!");
      setLoading(false);

      // Redirect based on role
      switch (mockData.role.toLowerCase()) {
        case "seller":
          navigate("/farmersdashboard");
          break;
        case "admin":
          navigate("/admindashboard");
          break;
        case "buyer":
          navigate("/buyersdashboard");
          break;
        case "delivery":
          navigate("/deliverydashboard");
          break;
        default:
          navigate("/");
      }
    }, 1200);
  };

  const handleCloseError = () => setError(null);
  const handleCloseSuccess = () => setSuccess(null);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      {/* ===== Embedded Styles ===== */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .login-wrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
          background: #fff;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          color: #1B1F1C;
        }

        /* Toast notifications */
        .login-toast {
          position: fixed;
          top: 24px;
          right: 24px;
          z-index: 9999;
          max-width: 380px;
          width: 100%;
          padding: 16px 20px;
          border-radius: 8px;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          box-shadow: 0 8px 24px rgba(15, 35, 20, 0.10);
          animation: slideDown 0.3s ease;
          border-left: 4px solid transparent;
          pointer-events: auto;
        }
        .login-toast.error {
          background: #FEF2F2;
          color: #991B1B;
          border-left-color: #DC2626;
        }
        .login-toast.success {
          background: #F0FDF4;
          color: #166534;
          border-left-color: #22C55E;
        }
        .login-toast .close-btn {
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
          color: currentColor;
          opacity: 0.6;
          padding: 0 4px;
          transition: opacity 0.15s;
        }
        .login-toast .close-btn:hover {
          opacity: 1;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Form side */
        .login-form-side {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 32px;
          background: #FFFFFF;
        }

        .login-form-box {
          width: 100%;
          max-width: 380px;
        }

        .login-brand {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 36px;
        }
        .login-brand svg {
          width: 22px;
          height: 22px;
          color: #1D5C3A;
          flex-shrink: 0;
        }
        .login-brand span {
          font-family: 'Poppins', system-ui, sans-serif;
          font-weight: 700;
          font-size: 18px;
          color: #123321;
        }

        .login-heading {
          font-family: 'Poppins', system-ui, sans-serif;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 6px;
          color: #1B1F1C;
        }
        .login-sub {
          color: #8A938A;
          font-size: 14px;
          margin-bottom: 32px;
        }

        .login-field {
          margin-bottom: 18px;
        }
        .login-field label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #586158;
          margin-bottom: 6px;
        }
        .login-field-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6px;
        }
        .login-field-row label {
          margin-bottom: 0;
        }
        .login-forgot-link {
          font-size: 12.5px;
          color: #1D5C3A;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.15s;
        }
        .login-forgot-link:hover {
          color: #15452C;
          text-decoration: underline;
        }

        .login-password-wrapper {
          position: relative;
        }
        .login-password-wrapper input {
          width: 100%;
          padding: 13px 14px;
          padding-right: 40px;
          border: 1.5px solid #E4E7E1;
          border-radius: 8px;
          font-family: inherit;
          font-size: 14px;
          color: #1B1F1C;
          background: #FCFCFB;
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s, background 0.15s;
        }
        .login-password-wrapper input:focus {
          border-color: #2F7A4D;
          background: #fff;
          box-shadow: 0 0 0 3px #E7F3EA;
        }
        .login-password-wrapper input::placeholder {
          color: #B7BEB6;
        }
        .login-eye-btn {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: #8A938A;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .login-eye-btn:hover {
          color: #1B1F1C;
        }

        .login-btn-primary {
          width: 100%;
          padding: 14px;
          border: none;
          border-radius: 8px;
          background: linear-gradient(180deg, #1D5C3A, #15452C);
          color: #fff;
          font-family: inherit;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          margin-top: 6px;
          box-shadow: 0 1px 2px rgba(15, 35, 20, 0.06);
          transition: background 0.2s, transform 0.1s, box-shadow 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .login-btn-primary:hover:not(:disabled) {
          background: linear-gradient(180deg, #15452C, #0A1D10);
          box-shadow: 0 4px 12px rgba(29, 92, 58, 0.30);
        }
        .login-btn-primary:active:not(:disabled) {
          transform: scale(0.98);
        }
        .login-btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .login-spinner {
          display: inline-block;
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          vertical-align: middle;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .login-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 24px 0;
          color: #8A938A;
          font-size: 12.5px;
        }
        .login-divider::before,
        .login-divider::after {
          content: "";
          flex: 1;
          height: 1px;
          background: #E4E7E1;
        }

        .login-socials {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
        .login-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 11px 0;
          border: 1.5px solid #E4E7E1;
          border-radius: 8px;
          background: #fff;
          cursor: pointer;
          transition: background 0.15s, border-color 0.15s, box-shadow 0.15s;
        }
        .login-social-btn:hover {
          background: #F3F9F4;
          border-color: #42A167;
          box-shadow: 0 2px 8px rgba(29, 92, 58, 0.08);
        }
        .login-social-btn svg {
          width: 18px;
          height: 18px;
          display: block;
        }

        .login-footer-link {
          text-align: center;
          margin-top: 28px;
          font-size: 13.5px;
          color: #586158;
        }
        .login-footer-link a {
          color: #1D5C3A;
          font-weight: 700;
          text-decoration: none;
          transition: color 0.15s;
        }
        .login-footer-link a:hover {
          color: #15452C;
          text-decoration: underline;
        }

        /* Visual side */
        .login-visual {
          position: relative;
          overflow: hidden;
          background: linear-gradient(155deg, #3C6B4A 0%, #274A32 45%, #132A1B 100%);
          display: flex;
          align-items: flex-end;
          padding: 56px;
        }
        .login-visual::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 20% 20%, rgba(255, 255, 255, 0.10), transparent 40%),
            repeating-linear-gradient(120deg, rgba(255, 255, 255, 0.03) 0 2px, transparent 2px 40px);
          pointer-events: none;
        }
        .login-visual::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 55%;
          background: linear-gradient(0deg, rgba(6, 16, 10, 0.75), transparent);
          pointer-events: none;
        }
        .login-visual-text {
          position: relative;
          z-index: 2;
          color: #fff;
          max-width: 360px;
        }
        .login-visual-text h2 {
          font-family: 'Poppins', system-ui, sans-serif;
          font-size: 28px;
          line-height: 1.3;
          font-weight: 600;
        }
        .login-leaf {
          display: inline-flex;
          margin-left: 6px;
          color: #8FE3A8;
          vertical-align: -3px;
        }
        .login-leaf svg {
          width: 22px;
          height: 22px;
          stroke: currentColor;
          stroke-width: 2;
          fill: none;
        }

        /* Responsive */
        @media (max-width: 860px) {
          .login-wrap {
            grid-template-columns: 1fr;
            min-height: 100vh;
          }
          .login-visual {
            display: none;
          }
          .login-form-side {
            padding: 32px 20px;
          }
        }
        @media (max-width: 480px) {
          .login-form-side {
            padding: 24px 16px;
          }
          .login-form-box {
            max-width: 100%;
          }
          .login-heading {
            font-size: 24px;
          }
          .login-visual-text h2 {
            font-size: 22px;
          }
          .login-socials {
            gap: 8px;
          }
          .login-social-btn {
            padding: 9px 0;
          }
        }
      `}</style>

      {/* ===== Main UI ===== */}
      <div className="login-wrap">
        {/* Toast notifications */}
        {error && (
          <div className="login-toast error">
            <span>{error}</span>
            <button className="close-btn" onClick={handleCloseError}>
              &times;
            </button>
          </div>
        )}
        {success && !error && (
          <div className="login-toast success">
            <span>{success}</span>
            <button className="close-btn" onClick={handleCloseSuccess}>
              &times;
            </button>
          </div>
        )}

        {/* Form side */}
        <div className="login-form-side">
          <div className="login-form-box">
            {/* Brand */}
            <div className="login-brand">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c-4-1-7-5-7-10a10 10 0 0 1 10-10c1 5 0 9-3 12-1.5 1.5-3.5 2.2-5.5 2.3" />
              </svg>
              <span>AgriSoko</span>
            </div>

            <h1 className="login-heading">Welcome Back!</h1>
            <p className="login-sub">Login to your AgriSoko account</p>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="login-field">
                <label htmlFor="username">Email or Phone Number</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter email or phone number"
                  value={loginFormData.username}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  autoComplete="username"
                  required
                />
              </div>

              <div className="login-field">
                <div className="login-field-row">
                  <label htmlFor="password" style={{ marginBottom: 0 }}>
                    Password
                  </label>
                  <Link to="/forgotpassword" className="login-forgot-link">
                    Forgot Password?
                  </Link>
                </div>
                <div className="login-password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={loginFormData.password}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="button"
                    className="login-eye-btn"
                    onClick={togglePasswordVisibility}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="login-btn-primary"
                onClick={handleLogin}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="login-spinner"></span> Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </form>

            <div className="login-divider">or continue with</div>

            <div className="login-socials">
              <button className="login-social-btn" type="button" aria-label="Google">
                <svg viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.24 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.9 1.5l2.6-2.5C16.9 3.3 14.7 2.3 12 2.3 6.9 2.3 2.7 6.5 2.7 11.6S6.9 20.9 12 20.9c6.9 0 8.9-4.9 8.9-7.4 0-.5 0-.9-.1-1.3H12z" />
                </svg>
              </button>
              <button className="login-social-btn" type="button" aria-label="Facebook">
                <svg viewBox="0 0 24 24">
                  <path fill="#1877F2" d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.16 8.44 9.94v-7.03H7.9v-2.9h2.54V9.86c0-2.5 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.78 8.44-4.94 8.44-9.94z" />
                </svg>
              </button>
              <button className="login-social-btn" type="button" aria-label="Apple">
                <svg viewBox="0 0 24 24">
                  <path fill="#000" d="M16.7 12.4c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.1 2.5-1.8 3.1-.5 7.6 1.3 10.1.9 1.2 1.9 2.6 3.2 2.5 1.3-.1 1.8-.8 3.3-.8s2 .8 3.3.8c1.4 0 2.3-1.2 3.1-2.5.7-1 1.1-2 1.4-2.8-3-.9-2.8-4-2.8-4.9zm-2.6-7.1c.7-.8 1.1-1.9 1-3-1 0-2.1.6-2.8 1.4-.6.7-1.1 1.8-1 2.9 1.1.1 2.1-.5 2.8-1.3z" />
                </svg>
              </button>
            </div>

            <p className="login-footer-link">
              Don't have an account? <Link to="/signup">Register here</Link>
            </p>
          </div>
        </div>

        {/* Visual side */}
        <div className="login-visual">
          <div className="login-visual-text">
            <h2>
              Empowering farmers.<br />Connecting communities.<br />Feeding Kenya.
              <span className="login-leaf">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c-4-1-7-5-7-10a10 10 0 0 1 10-10c1 5 0 9-3 12-1.5 1.5-3.5 2.2-5.5 2.3" />
                </svg>
              </span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;