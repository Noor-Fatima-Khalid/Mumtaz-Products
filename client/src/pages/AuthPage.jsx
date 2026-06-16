import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Eye, EyeOff, Leaf, ArrowLeft, AlertCircle, CheckCircle2 } from "lucide-react";
import { useAuth } from "../context/AuthContext.jsx";

function Field({ label, type = "text", value, onChange, error, right }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-semibold text-gray-700">{label}</label>

      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          className={`w-full px-3 py-2 border rounded-md outline-none transition
            ${error ? "border-red-500" : "border-gray-300 focus:border-green-600"}`}
        />
        {right}
      </div>

      {error && (
        <p className="text-red-600 text-xs flex items-center gap-1">
          <AlertCircle size={12} /> {error}
        </p>
      )}
    </div>
  );
}

function PasswordField(props) {
  const [show, setShow] = useState(false);

  return (
    <Field
      {...props}
      type={show ? "text" : "password"}
      right={
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-2 top-2 text-gray-500"
        >
          {show ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      }
    />
  );
}

export default function AuthPage() {
  const { login, signup, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [tab, setTab] = useState("login");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await login(loginData);
    if (res.ok) navigate(from, { replace: true });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const res = await signup(signupData);
    if (res.ok) setTab("login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-6">

        {/* Back */}
        <Link to="/" className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <ArrowLeft size={16} /> Back to store
        </Link>

        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <Leaf className="text-green-700" />
          <h1 className="text-xl font-bold text-green-800">Mumtaz Products</h1>
        </div>

        {/* Tabs */}
        <div className="flex border-b mb-6">
          <button
            className={`flex-1 py-2 ${tab === "login" ? "border-b-2 border-green-600 font-semibold" : ""}`}
            onClick={() => setTab("login")}
          >
            Sign In
          </button>
          <button
            className={`flex-1 py-2 ${tab === "signup" ? "border-b-2 border-green-600 font-semibold" : ""}`}
            onClick={() => setTab("signup")}
          >
            Sign Up
          </button>
        </div>

        {/* LOGIN */}
        {tab === "login" && (
          <form onSubmit={handleLogin} className="space-y-4">
            <Field
              label="Email"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            />
            <PasswordField
              label="Password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />

            <button className="w-full bg-green-700 text-white py-2 rounded-md">
              Sign In
            </button>
          </form>
        )}

        {/* SIGNUP */}
        {tab === "signup" && (
          <form onSubmit={handleSignup} className="space-y-4">
            <Field
              label="Name"
              value={signupData.name}
              onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
            />
            <Field
              label="Email"
              value={signupData.email}
              onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
            />
            <PasswordField
              label="Password"
              value={signupData.password}
              onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
            />
            <PasswordField
              label="Confirm Password"
              value={signupData.confirm}
              onChange={(e) => setSignupData({ ...signupData, confirm: e.target.value })}
            />

            <button className="w-full bg-green-700 text-white py-2 rounded-md">
              Create Account
            </button>
          </form>
        )}
      </div>
    </div>
  );
}