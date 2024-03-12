
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
      <Hero
      mainhead = "Top Data-Driven Digital Marketing Agency"
      maindesc = "Our marketing agency employs data-driven strategies that are not only effective but also guaranteed to hit targets. If we don&apos;t meet our agreed-upon objectives, we'll work for FREE!"
      />
      <Section6 />
      <Section7 />
      <Quote />
      <Grid />
      <Cont />
      <Strategy />
      <Faq 
      q1="What sets PieBond apart from other digital marketing agencies in India?"
      a1 = "In a landscape where numerous digital marketing agencies continue to operate based on assumptions and subjective opinions for campaign management and strategy formulation, PieBond stands out by prioritizing concrete facts, data, and analytics. Central to our approach is the proprietary Infinity-5 framework, which consistently delivers and surpasses desired outcomes with each campaign iteration."    
      q2 = "How do you approach targeting our niche audience effectively?"
      a2 = "At PieBond, we leverage cutting-edge targeting methodologies and audience segmentation strategies to precisely engage with your niche demographic. Our approach integrates data-driven insights, thorough market research, and in-depth audience analysis to craft hyper-targeted campaigns tailored to resonate with your unique target audience."
        />
      
      <Footer />
    </div>
  );
}
