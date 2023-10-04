import Count from "@/components/Count";
import FeaturedProject from "@/components/FeaturedProject";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Subscribe from "@/components/Subscribe";
import WorkList from "@/components/WorkList";

const page = () => {
  return (
    <div>
      <Hero />
      <WorkList />
      <Count />
      <FeaturedProject />
      <Subscribe />
      <Footer />
      
    </div>
  );
};

export default page;