
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SustainabilityGoals from "./components/sustainability/SustainabilityGoals";
import TrendingArticles from "./components/articles/TrendindArticles";

export default function Home() {
  return (
      <main>
        
        <Header />
        <Hero />
        <TrendingArticles />
        <SustainabilityGoals />
        <Faq />
        <Footer />
      </main>
  );
}
