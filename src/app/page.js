
import Hero from "../components/hero/hero2"
import Section6 from "../components/Sections/section6.js"
import Section7 from "../components/Sections/section7.js"
import Footer from '../components/footer/footer';
import Faq from "../components/faq/faq"
import Navbar from "../components/navbar/mainnav"
import Quote from "../components/Sections/Quote"
import Grid from "../components/Sections/Grid.jsx"
import Cont from "../components/Sections/Connect"
import Strategy from "../components/Sections/Strategy"
export default function Home() {
  return (
    <div ClassName="flex flex-col ">
      <Navbar />
      <Hero />
      <Section6 />
      <Section7 />
      <Quote />
      <Grid />
      <Cont />
      <Strategy />
      <Faq />
      <Footer />
    </div>
  );
}
