import NavBar from '../components/navbar/navbar';
import Hero from "../components/hero/hero"
import Section from "../components/Sections/section2"
import Section2 from "../components/Sections/section3"
import Section3 from "../components/Sections/section4"
import Section4 from "../components/Sections/section5"
import Footer from '../components/footer/footer';
export default function Home() {
  return (
    <div ClassName="flex flex-col ">
      <NavBar />
      <Hero />
      <Section />
      <Section2/>
      <Section3/>
      <Section4 />
      <Footer/>
    </div>
  );
}
