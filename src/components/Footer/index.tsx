import {
  FaBookOpen,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {

  return (

 <footer className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 text-emerald-100">
 <div className="mx-auto max-w-7xl px-6 py-14">

 <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          
   <div>
  <div className="flex items-center gap-2">
  <FaBookOpen className="text-3xl text-yellow-300" />

   <h2 className="text-2xl font-bold text-white"> BookNest </h2>

  </div>

   <p className="mt-5 leading-7">

      Discover, organize and share your favorite books with
     readers around the world.

     </p>

   </div>

          
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/"
                className="transition hover:text-yellow-300"
              >
                Home
              </Link>

              <Link
                to="/explore"
                className="transition hover:text-yellow-300"
              >
                Explore Books
              </Link>

              <Link
                to="/add-book"
                className="transition hover:text-yellow-300"
              >
                Add Book
              </Link>

              <Link
                to="/my-books"
                className="transition hover:text-yellow-300"
              >
                My Books
              </Link>

            </div>
          </div>

        
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-300" />

                <span>support@booknest.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-emerald-400" />

                <span>+880 1700-000000</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-emerald-400" />

                <span>Dhaka, Bangladesh</span>
              </div>

            </div>
          </div>

        
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
               className="rounded-full bg-emerald-800 p-3 text-white transition duration-300 hover:scale-110 hover:bg-yellow-400 hover:text-emerald-950"
              >
                <FaFacebook />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
               className="rounded-full bg-emerald-800 p-3 text-white transition duration-300 hover:scale-110 hover:bg-yellow-400 hover:text-emerald-950"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              className="rounded-full bg-emerald-800 p-3 text-white transition duration-300 hover:scale-110 hover:bg-yellow-400 hover:text-emerald-950"
              >
                  <FaLinkedin />
              </a>

     </div>
     </div>

 </div>
 
  <div className="mt-12 border-t border-emerald-800 pt-6 text-center text-sm text-emerald-200">
       © {new Date().getFullYear()} BookNest. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;