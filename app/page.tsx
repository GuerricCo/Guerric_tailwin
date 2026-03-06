import Faq from "./components/faq";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SustainabilityGoals from "./components/sustainabilityGoals/SustainabilityGoals";
import TrendingArticles from "./components/TrendindArticles";

export default function Home() {
  return (
      <main>
        
        <Header />
        <Hero />
        <TrendingArticles />
        <SustainabilityGoals />
        <Faq />
      </main>
  );
}
