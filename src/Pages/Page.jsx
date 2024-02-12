import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Technology from "../components/Technology";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero-Section";
import Divider from "../components/Divider";

const Page = () => {
  return (
    <>
      <div className="body flex flex-col items-center justify-center gap-10">
        <Navbar />
        <HeroSection />
        <Divider />

        <Services />
        <Divider />

        <Technology />
        <Divider />

        <Blogs />
        <Divider />

        <Contact />
        <Divider />

        <Footer />
      </div>
    </>
  );
};

export default Page;
