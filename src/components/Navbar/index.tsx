import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");

    navigate("/login");
  };

  const activeClass = "font-semibold text-emerald-200";
  const normalClass = "transition duration-200 hover:text-yellow-300";

  return (
    <nav className="bg-emerald-700 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold">
          📚 BookNest
        </NavLink>

        {/* Menu */}
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/explore"
            className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }
          >
            Explore Books
          </NavLink>

          {token ? (
            <>
              <NavLink
                to="/add-book"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                Add Book
              </NavLink>

              <NavLink
                to="/my-books"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                My Books
              </NavLink>

              <button
                onClick={handleLogout}
                className="rounded-lg bg-white px-4 py-2 font-medium text-emerald-700 transition hover:text-yellow-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;