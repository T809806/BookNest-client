import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../api/axios";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/register", {
        name,
        email,
        password,
        photoURL,
      });

      if (res.data.success) {
        toast.success("Registration Successful!");

        setName("");
        setEmail("");
        setPhotoURL("");
        setPassword("");

        navigate("/login");
      }
    } catch (error: any) {
      console.error(error);

      toast.error(
        error?.response?.data?.message || "Registration Failed!"
      );
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-slate-100 px-4 py-10">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold text-emerald-700">
          Create Account
        </h1>

        <p className="mb-6 text-center text-gray-500">
          Join BookNest today
        </p>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Name */}
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-emerald-600"
            />
          </div>

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

          {/* Photo URL */}
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Photo URL
            </label>

            <input
              type="text"
              placeholder="Enter your photo URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
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
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-emerald-700 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;