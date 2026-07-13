const Login = () => {
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold text-blue-600">
          Login
        </h1>

        <p className="mb-6 text-center text-gray-500">
          Welcome back to BookNest
        </p>

        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="mb-2 block font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
            />
          </div>

          <button
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
            type="submit"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center">
          Don't have an account?
          <span className="cursor-pointer font-semibold text-blue-600">
            {" "}
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;