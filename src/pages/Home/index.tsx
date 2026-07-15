import Hero from "../../components/Hero";
import FeaturedBooks from "../../components/FeaturedBooks";
import Categories from "../../components/Categories";
import WhyChooseUs from "../../components/WhyChooseUs";
import Statistics from "../../components/Statistics";
import Testimonials from "../../components/Testimonials";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
  <FeaturedBooks />
  <Categories />
         <WhyChooseUs />
         <Statistics />
         <Testimonials />
         <Newsletter />
         <Footer />
    </>
  );
};

export default Home;