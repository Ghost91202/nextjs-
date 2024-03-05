

import Footer from '@/components/footer/footer';
import Banner from "../../../components/hero/hero2"
import Navbar from "@/components/navbar/mainnav"
import Faq from "../../../components/faq/faq"
import When from "../../../components/when/page"
import ServiceCard from "../../../components/servicesslider/sslider"
import Proven from "../../../components/Sections/proven"
import Drawer from "../../../components/drawer/drawer"
import Faq1 from "../../../components/faq/faq2"
import seoimg from "../../../assets/unds.jpg"
import Section2 from '@/components/services/sections/section2';
import Section3 from '@/components/services/sections/section3';
import Price from "../../../components/services/price/price"
export default function Home() {
  const faqData = [
    { question: 'Targeted Ad Campaigns', answer: 'We craft targeted LinkedIn Ads tailored to specific industries, job titles, and professional interests, guaranteeing that your message resonates with the right audience.' },
    { question: 'Content Creation', answer: 'Our team crafts compelling ad content that speaks to professionals, driving engagement and conversions.' },
    { question: 'Campaign Management and Optimisation', answer: 'We manage and continuously optimise your LinkedIn Ads campaigns, ensuring they align with your marketing goals and deliver the desired results.' }
  ];
  return (
    <div ClassName="flex flex-col ">
      <Navbar />
      <Banner />
      <Proven 
      desc1="Discover our array of proven digital marketing tactics, supported by data-driven insights, designed to propel your business to success in the online realm."

      desc2 = "Take advantage of our accredited professionals, armed with the expertise and capabilities to enhance your digital marketing endeavors."

      desc3 = "Witness the distinction through our commitment to delivering remarkable outcomes, merging proficiency, innovation, and customized digital marketing approaches."
      />
      <ServiceCard
      
      title = "Professional LinkedIn Ads Agency"
      desc = "LinkedIn presents an unparalleled chance to engage with professionals and key decision-makers. Mr. Digital's LinkedIn Ads solutions are meticulously crafted to precisely target this audience, harnessing the platform's B2B functionalities to foster interaction and cultivate leads."

      cardTitle1 = "Analytics and Reporting"
      desc1 = "We furnish comprehensive analytics and reporting, furnishing you with valuable insights into campaign effectiveness and return on investment (ROI)."

            cardTitle2 = "Targeted B2B Campaigns"
            desc2 = "Our expertise lies in crafting bespoke LinkedIn campaigns tailored for B2B engagement, reaching decision-makers and influencers across diverse industries."

            cardTitle3 = "Sponsored Content and InMail"
            desc3 = "Harnessing the power of LinkedIn's Sponsored Content and InMail features, we craft compelling messages designed to captivate audiences and directly engage potential leads within the feed."

            cardTitle4 = "Brand Awareness and Thought Leadership"
            desc4 = "Our mission is to position your brand as a thought leader within your industry by leveraging LinkedIn ads to amplify your content and enhance brand visibility."

            cardTitle5 = "Lead Generation Campaigns"
            desc5 = "Our team specializes in setting up LinkedIn lead generation campaigns, utilizing LinkedIn's Lead Gen Forms to capture high-quality leads effectively."
       />
      <Faq1 faqData={faqData}/>
      <Drawer title="Understanding LinkedIn Marketing"
        button="Understand Our Seo Service"
        desc1="Think of our LinkedIn Marketing services as orchestrating a refined networking event, but in the digital realm. Envision hosting a business mixer where every participant is a potential customer, partner, or influencer within your industry. This illustrates the potent impact of LinkedIn when wielded adeptly."
        Img1={seoimg}
        title2="Our 5-stage process for effective LinkedIn marketing campaigns:"
        submenu1="1. Research & Plan"
        subdesc1="Similar to curating a guest list for a networking event, our process begins with comprehending your business, target audience, and competitors. This foundational understanding enables us to devise a customized strategy aimed at connecting with individuals who contribute value to your business."
        submenu2="2. Track & Measure"
        subdesc2="Just as you would customize your approach and conversation for each prospect at a networking event, our dedicated dashboard monitors key metrics to gauge the impact of your LinkedIn endeavors. Furthermore, we establish attainable goals upfront before initiating any actions or 'conversations,' providing a tangible benchmark against which to measure results."
        submenu3="3. Execute"
        subdesc3="This marks the moment when your networking event &apos;goes live.&apos; Our team of specialists meticulously crafts the essential materials to engage with your target audience, encompassing everything from direct messages to high-caliber posts, guaranteeing a seamless 'event' experience.




        "
        submenu4="4. Optimise"
        subdesc4="Consider this akin to refining your approach based on real-time feedback during the event. Our team will consistently fine-tune your strategy, utilizing real performance metrics to adjust outreach techniques, focus areas, and other elements essential for achieving success."
        submenu5="5. Scale"
        subdesc5="Once we've achieved the level of engagement and conversion that meets your satisfaction, akin to a successful networking event, it's time to broaden our horizons. We can elevate your outreach efforts to connect with an even larger pool of potential clients, thereby scaling up your results significantly."
        lastdesc="Our LinkedIn Marketing services serve as your gateway to hosting the ideal 'online networking event,' continually attracting high-value connections that are pivotal for fostering business growth.




        "
      />
      <Section2 title="Why You Need a Linkedin Ads Agency"
        desc1="Understand the full potential of professional LinkedIn marketing services"
        desc2="Envision a LinkedIn marketing campaign that reliably converts cold prospects into leads for your business each month, all while staying within your existing marketing budget. Are you weary of allocating your LinkedIn marketing budget to unproductive agencies and campaigns? It&apos;s time to implement our tried-and-tested, revenue-centric strategies. Our LinkedIn sales and marketing approaches have empowered businesses across various industries to surpass their competitors and establish dominance on LinkedIn, consistently funneling leads into their pipeline."
      />
      <Section3
      maintitle = "Our proven framework enables us to guarantee success with LinkedIn advertising."
      title='Research & Plan'
      desc= "Our process commences with a thorough analysis of your competitors and a deep understanding of your business. From there, we craft a bespoke LinkedIn prospecting strategy meticulously tailored to achieve the targets necessary for a substantial return on investment."
      title2 = "Track & Measure"
      desc2 = "We implement tracking mechanisms to ensure comprehensive measurement at every stage of the process, allowing us to gauge engagement rates across all activities."
      title3 = "Execute"
      desc3 = "Our team of specialists meticulously crafts the essential materials to engage with your target audience, encompassing everything from direct messages to high-caliber posts, guaranteeing a seamless 'event' experience."
      title4 = "Optimise"
      desc4 = "Consider this akin to refining your approach based on real-time feedback during the event. Our team will consistently fine-tune your strategy, utilizing real performance metrics to adjust outreach techniques, focus areas, and other elements essential for achieving success."
      title5 = "Scale"
      desc5 = "Once we've achieved the level of engagement and conversion that meets your satisfaction, akin to a successful networking event, it's time to broaden our horizons. We can elevate your outreach efforts to connect with an even larger pool of potential clients, thereby scaling up your results significantly."
       />
      {/* <Price/> */}
      <Faq
      q1 = "Why do I need a LinkedIn Marketing Agency?"
      a1 = "To effectively engage and convert a multitude of professionals on LinkedIn, it's crucial to partner with a seasoned LinkedIn ads agency. Given the platform's diverse array of outreach opportunities, this collaboration is instrumental in maximizing marketing impact. Leveraging their expertise, you can tap into LinkedIn's vast potential, fostering meaningful connections and driving tangible results within the confines of a concise word limit."

      q2 = "How does a LinkedIn Marketing Agency work?"
      a2 = "Our LinkedIn advertising specialists utilize their expertise to identify and connect with professionals on the platform, defining your target audience with precision. They craft compelling advertising copy and develop campaigns designed to establish a personal connection with potential prospects, leveraging their experience to drive impactful engagement within the confines of a concise word limit."


      q3 = "Do I need a LinekdIn Marketing strategy?"
      a3 = "Establishing a LinkedIn ads strategy is imperative prior to launching your campaign. This ensures that your business remains focused on key metrics and goals, laying the groundwork for a successful marketing endeavor within the constraints of a succinct word limit."
      q4 = "How do your run a LinekdIn ad?"
      a4 = "Our team of LinkedIn advertising experts is poised to develop a customized and flexible strategy aligned with your unique business objectives. Whether your goal is lead generation, driving relevant traffic, or increasing sales, we'll tailor our approach to precisely meet your needs, ensuring optimal results within the confines of a succinct word limit."
      


      />
    <Footer/>
    </div>
  );
}
