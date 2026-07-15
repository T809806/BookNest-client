const Contact = () => {

  return (

    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-center text-4xl font-bold text-emerald-700">  Contact Us </h1>

 <p className="mt-4 text-center text-gray-600">
  We'd love to hear from you. Feel free to reach out anytime.
 </p>

 <div className="mt-12 grid gap-10 md:grid-cols-2">
 <div className="rounded-xl bg-white p-8 shadow-md">
    <h2 className="mb-6 text-2xl font-semibold">
  Contact Information
 </h2>

 <p className="mb-4">
      📧 Email:
  <br />
  tahiyaakter94@gmail.com
</p>

          <p className="mb-4">
            📍 Location:
            <br />
            Dhaka, Bangladesh
          </p>

          <p>
            💻 GitHub:
            <br />
            github.com/T809806
          </p>
        </div>

        <form className="rounded-xl bg-white p-8 shadow-md">
          <div className="mb-5">
            <label>Name</label>

            <input
              type="text"
              className="mt-2 w-full rounded-lg border p-3"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-5">
            <label>Email</label>

            <input
              type="email"
              className="mt-2 w-full rounded-lg border p-3"
              placeholder="Your Email"
            />
          </div>

  <div className="mb-5">
      <label>Message</label>

      <textarea
              rows={5}
              className="mt-2 w-full rounded-lg border p-3"
              placeholder="Write your message..."
            />
 </div>

 <button
    className="w-full rounded-lg bg-emerald-700 py-3 font-semibold text-white transition hover:text-yellow-300"
     >
            Send Message
          </button>
        </form>
      </div>

    </div>

  );
};

export default Contact;