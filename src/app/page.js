
import Hero from "../components/hero/hero"
import Section from "../components/Sections/section2"
import Section2 from "../components/Sections/section3"
import Section3 from "../components/Sections/section4"
import Section4 from "../components/Sections/section5"
import Section6 from "../components/Sections/section6.js"
import Section7 from "../components/Sections/section7.js"
import Footer from '../components/footer/footer';
import Faq from "../components/faq/faq"
import Navbar from "@/components/navbar/Navbar"
import Quote from "../components/Sections/Quote"
import Grid from "../components/Sections/Grid.jsx"
import Cont from "../components/Sections/Connect"
import Strategy from "../components/Sections/Strategy"
export default function Home() {
  return (
    <div ClassName="flex flex-col ">
      <Navbar/>
      <Hero />
      <Section6 />
      <Section7 />
      <Quote />
      <Grid />
      <Cont />
      <Strategy/>
      {/* <Section />
      <Section2/>
      <Section3/>
      <Section4 /> */}
      <Faq/>
    <Footer/>
    </div>
  );
}
