

import Footer from '@/components/footer/footer';
import Banner from "../../components/assets/Banner/banner2"
import Navbar from "@/components/navbar/mainnav"
import IMG from "../../assets/banner.avif"
import Section1 from "../../components/services/section1"
import Section2 from "../../components/services/engagement"
import Section3 from "../../components/services/choosesection"
import Section4 from "../../components/Sections/dmsec/section2"
export default function Home() {
  return (
    <div ClassName="flex flex-col ">
          <Navbar />

          <Banner img={IMG}
              title="Tailored Digital Marketing Services In India For Business Growth"
              title2="PI-BOND is one of the best Digital Marketing Agencies in India, possessing 16+ years of experience in executing the right mix of digital marketing techniques to create the most amazing customer experiences. With a data-driven approach, we craft successful campaigns that achieve your business goals with quantifiable results"
              link="/contact"
          />
          <Section1 />

          <Section4/>
          <Section3/>
    <Footer/>
    </div>
  );
}
