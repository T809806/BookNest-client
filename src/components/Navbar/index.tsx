import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-emerald-700 text-white shadow-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-emerald-100">
          📚 BookNest
        </h1>

        {/* Menu */}
        <div className="flex items-center gap-6">
         <NavLink
  to="/"
  className={({ isActive }) =>
    isActive ? " text-emerald-200 font-semibold" : "transition duration-200 hover:text-emerald-100"
  }
>
  Home
</NavLink>

          <NavLink
  to="/"
  className={({ isActive }) =>
    isActive ? "text-emerald-200 font-semibold" : "transition duration-200 hover:text-emerald-100"
  }
>
  Explore Books
</NavLink>

         <NavLink
  to="/"
  className={({ isActive }) =>
    isActive ? "text-emerald-200 font-semibold" : "transition duration-200 hover:text-emerald-100"
  }
>
  Login
</NavLink>

          <NavLink
  to="/"
  className={({ isActive }) =>
    isActive ? "text-emerald-200 font-semibold" : "transition duration-200 hover:text-emerald-100"
  }
>
  Register
</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;