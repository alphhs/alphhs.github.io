import { HeroSection } from "./HeroSection";
import { HeroSection2 } from "./HeroSection2";
import { Card } from "./Card";
import { Card2 } from "./Card2";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <HeroSection2 />
      <Card
        title="PROJECTS"
        link="/projects"
        description=" Some of the web projects"
        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80"
      />
      <Card
        titleNumber="02/"
        link="/about"
        titleText="Creative interest"
        title="COVERS & ORIGINALS"
        description=" Some of the covers I made "
        src="https://images.unsplash.com/photo-1541002610386-cbea235ba989?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
      <Card2 />
      <Footer />
    </>
  );
};
