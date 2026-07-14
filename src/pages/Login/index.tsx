import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../api/axios";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      if (res.data.success) {
        // Save JWT Token
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userEmail", email);

        toast.success("Login Successful!");

        // Clear Inputs
        setEmail("");
        setPassword("");

        // Redirect Home
        navigate("/");
      }
    } catch (error: any) {
      console.error(error);

      toast.error(
        error?.response?.data?.message || "Login Failed!"
      );
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-slate-100 px-4 py-10">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold text-emerald-700">
          Welcome Back
        </h1>

        <p className="mb-6 text-center text-gray-500">
          Login to your BookNest account
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-emerald-600"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-emerald-600"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-700 py-3 font-semibold text-white transition hover:bg-emerald-800"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-emerald-700 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;