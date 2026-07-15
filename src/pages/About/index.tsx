import { BookOpen, Users, Target } from "lucide-react";

const About = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-center text-4xl font-bold text-emerald-700">
        About BookNest
      </h1>

      <p className="mx-auto mt-5 max-w-3xl text-center text-lg text-gray-600">
        BookNest is a modern online platform designed for book lovers to
        discover, explore, and manage their favorite books. Our goal is to
        create a simple, fast, and enjoyable reading experience for everyone.
      </p>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        <div className="rounded-xl bg-white p-8 text-center shadow-md">
          <BookOpen className="mx-auto mb-4 text-emerald-700" size={42} />
          <h2 className="mb-3 text-2xl font-semibold">Our Mission</h2>

          <p className="text-gray-600">
            To connect readers with quality books through a clean, secure,
            and user-friendly platform.

          </p>
        </div>

        <div className="rounded-xl bg-white p-8 text-center shadow-md">
          <Target className="mx-auto mb-4 text-emerald-700" size={42} />
          <h2 className="mb-3 text-2xl font-semibold">Our Vision</h2>

          <p className="text-gray-600">
            Build a community where readers can easily discover and share
            amazing books from different categories.
          </p>
        </div>

        <div className="rounded-xl bg-white p-8 text-center shadow-md">
          <Users className="mx-auto mb-4 text-emerald-700" size={42} />
          <h2 className="mb-3 text-2xl font-semibold">Our Community</h2>

          <p className="text-gray-600">
            Thousands of readers and book enthusiasts can join BookNest and
            build their personal library together.
          </p>
  </div>
    </div>
    </div>
    
  );
};

export default About;