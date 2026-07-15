import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../api/axios";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const handleDemoLogin = () => {
    setEmail("demo@gmail.com");
    setPassword("123456");
  };

  const handleLogin = async (

    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      if (res.data.success) {
     
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userEmail", email);

        toast.success("Login Successful!");

       
        setEmail("");
        setPassword("");

      
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

    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold text-emerald-700">  Welcome Back </h1>

        <p className="mb-6 text-center text-gray-500">
          Login to your BookNest account
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
        
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

         
          <button
            type="button"
            onClick={handleDemoLogin}
            className="w-full rounded-lg border-2 border-emerald-700 bg-white py-3 font-semibold text-emerald-700 transition duration-300 hover:bg-emerald-700 hover:text-white"
          >
            Use Demo Credentials
          </button>
        </form>

       
        <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
          <h3 className="mb-2 font-semibold text-emerald-700">
            Demo Credentials
          </h3>

          <p className="text-sm text-gray-700">
            <span className="font-semibold">Email:</span>{" "}
            demo@gmail.com
          </p>

          <p className="text-sm text-gray-700">
            <span className="font-semibold">Password:</span>{" "}
            123456
          </p>
        </div>

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