
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
      q3 = "How experienced is your team in the services you provide?"
      a3 = "Our team comprises seasoned professionals with years of experience in website and app development. We bring a wealth of expertise to every project, ensuring high-quality and innovative solutions."
      q4 = "What sets your SEO services apart from others in the industry?"
      a4 = "We take a holistic approach to SEO, focusing on both on-page and off-page optimization. Our team stays updated with the latest search engine algorithms to ensure that your website ranks higher and attracts the right audience."
      q5 = "What sets your agency apart from others in the freelancing market?"
      a5= "Our commitment to excellence, client-centric approach, and a talented team of professionals set us apart. We prioritize communication, transparency, and delivering solutions that not only meet but exceed our clients' expectations."
        />
      
      <Footer />
    </div>
  );
}
