import { useState } from "react";
import toast from "react-hot-toast";

const Newsletter = () => {

  const [email, setEmail] = useState("");

  const handleSubscribe = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    toast.success("Thanks for subscribing!");

    setEmail("");
  };

  return (
    <section className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 py-20 text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">

    <h2 className="text-4xl font-bold"> Stay Connected with BookNest  </h2>

     <p className="mt-5 text-lg text-emerald-100">
         Subscribe to receive updates about newly added books,
         reading tips, and exclusive recommendations.
    </p>

        <form
          onSubmit={handleSubscribe}
          className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="flex-1 rounded-lg border border-white/30 bg-white px-5 py-3 text-gray-800 outline-none"
            required
          />

     <button
       type="submit"
  className="rounded-lg border-2 border-white bg-emerald-700 px-8 py-3 font-semibold text-white transition duration-300 hover:text-yellow-300"
     >
   Subscribe

          </button>

    </form>

   </div>

    </section>
  );
};

export default Newsletter;