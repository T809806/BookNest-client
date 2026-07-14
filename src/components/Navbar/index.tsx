import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [menuOpen, setMenuOpen] = useState(false);

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
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-wide"
        >
          📚 BookNest
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
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
                className="rounded-lg border-2 border-white bg-emerald-700 px-5 py-2 font-semibold text-white transition duration-300 hover:text-yellow-300"
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

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl md:hidden"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="space-y-4 bg-emerald-700 px-6 pb-6 md:hidden">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `block ${isActive ? activeClass : normalClass}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/explore"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `block ${isActive ? activeClass : normalClass}`
            }
          >
            Explore Books
          </NavLink>

          {token ? (
            <>
              <NavLink
                to="/add-book"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block ${isActive ? activeClass : normalClass}`
                }
              >
                Add Book
              </NavLink>

              <NavLink
                to="/my-books"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block ${isActive ? activeClass : normalClass}`
                }
              >
                My Books
              </NavLink>

              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="w-full rounded-lg border-2 border-white bg-emerald-700 px-5 py-2 font-semibold text-white transition duration-300 hover:bg-emerald-800"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block ${isActive ? activeClass : normalClass}`
                }
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block ${isActive ? activeClass : normalClass}`
                }
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;