import Footer from "@/components/footer/footer";
import Banner from "../../../components/hero/hero2";
import Navbar from "@/components/navbar/mainnav";
import Faq from "../../../components/faq/faq";
import When from "../../../components/when/page";
import ServiceCard from "../../../components/servicesslider/sslider";
import Proven from "../../../components/Sections/proven";
import Drawer from "../../../components/drawer/drawer";
import Faq1 from "../../../components/faq/faq2";
import seoimg from "../../../assets/unds.jpg";
import Section2 from "@/components/services/sections/section2";
import Section3 from "@/components/services/sections/section3";
import Price from "../../../components/services/price/price";
export default function Home() {
  const faqData = [
    {
      question: "Expertise That Delivers",
      answer:
        "Our team embodies a wealth of expertise in Google Ads, continuously staying ahead of industry trends to deliver strategies that not only perform but surpass expectations.",
    },
    {
      question: "Transparent Communication: Clarity in Every Step",
      answer:
        "We prioritize clear, jargon-free communication, ensuring that you're always in the loop and fully comprehend the strategies we implement, along with their direct impact on your business.",
    },
    {
      question: "ROI-Centric: Your Success, Quantified",
      answer:
        "Our primary focus is on maximizing your return on investment (ROI). With precision budget management, we ensure that every pound spent translates into tangible results, driving optimal outcomes for your business.",
    },
    {
      question: "Comprehensive Ad Management: Covering All Bases",
      answer:
        "With our comprehensive ad management services, we ensure your brand's omnipresence across digital platforms, from search to social media ads, effectively maximizing your online visibility and reach.",
    },
  ];
  return (
    <div ClassName="flex flex-col ">
      <Navbar />
      <Banner />
      <Proven
       title1 = "Proven Google Ads Tactics"
       desc1 = "Discover a collection of proven Google advertising tactics, meticulously designed and backed by data. These strategies are tailored to enhance your brand visibility on Google and drive tangible results for your business."
       
       title2 = "Certified Google Ads Experts"
       desc2 = "Harness the knowledge and skills of our certified professionals dedicated to optimizing your Google advertising campaigns. Stay ahead of Google advertising trends with a team committed to delivering top-notch solutions for your business."
       
       title3 = "Guaranteed Google Ads Results"
       desc3 = "Witness the impact of our unwavering commitment to Google advertising results. We blend expertise, innovation, and personalized strategies to ensure your success in the dynamic Google advertising landscape."
       
      />
      <ServiceCard
        title="Professional Google Ads Agency"
        desc="In the realm of digital marketing, effective Google Ads Management can be a game-changer, and here at Mr. Digital, we excel in this arena. Our mission is to propel your business into the spotlight of search engine results, connecting you with your target audience across various platforms including Google, Facebook, Instagram, and LinkedIn. Our Google Ads management services go beyond mere visibility; they're geared towards converting clicks into loyal customers. Considering Google Ads Management? Our friendly experts are here to navigate you through the intricacies of paid advertising, aligning your objectives with a tailored strategy that suits your budget. With Mr. Digital's Google Ads Management, you're not just opting for a service; you're selecting a partner in your digital success journey."
        cardTitle1="Search Ads: Your Brand, Font and Centre"
        desc1="We specialize in crafting targeted search ads that elevate your business to the forefront of search engine results, capturing the attention of potential customers precisely at the moment they are actively seeking your products or services."
        cardTitle2="Remarketing Ads: Keeping your Brand Top-of-Mind"
        desc2="Our remarketing ads strategically target users who have previously engaged with your website, serving as timely reminders of your offerings and gently guiding them towards conversion."
        cardTitle3="Display Ads : Visually Captivating Your Audience"
        desc3="Our display ads seamlessly merge visual appeal with strategic placement, augmenting your brand's visibility and igniting interest across a vast network of websites."
        cardTitle4="Video Ads: Telling Your Brand's Story"
        desc4="We leverage the dynamic potential of video to craft engaging ads that eloquently narrate your brand's story, optimizing for platforms such as YouTube to drive views, clicks, and conversions effectively."
        cardTitle5="Social Media Ads: Connecting with Your Audience"
        desc5="Our social media ads help you connect your audience with your brand. We use social media platforms such as Facebook, Twitter, Instagram, LinkedIn, and YouTube to connect you with your target audience. "
        cardTitle6="Shopping Ads: Boosting E-commerce Visibility"
        desc6="For e-commerce endeavors, our shopping ads spotlight your products with captivating images and comprehensive details, enticing users who are primed to make a purchase."
      />
      <Faq1 faqData={faqData} mainhead="Why Professional Google Advertising Services?" />
      <Drawer
        title="Understanding Google Ads"
        button="Understand Our Seo Service"
        desc1="Think of our Google Ads service as your highly-targeted, interactive billboards along the digital highway. In the past, billboards were placed on busy roads to catch the eyes of passing drivers. However, unlike traditional billboards, our Google Ads are not just seen by everyone—they're seen by the right ones, those already searching for what you offer."
        Img1={seoimg}
        title2="
        Our 5-stage process for effective Google PPC ad campaigns:
        1. Research & Plan"
        submenu1="1. Research & Plan"
        subdesc1="Consider this phase akin to selecting the perfect billboard location. We delve deep into market research and competitor analysis to pinpoint the optimal 'spots' for your ads, ensuring that your target audience encounters your message with maximum visibility and impact."
        submenu2="2. Track & Measure"
        subdesc2="This phase is analogous to conducting traffic studies to assess the visibility of a physical billboard. We utilize sophisticated measurement tools to gather real-time data, accessible through your customized dashboard, much like tallying the passing cars for a billboard. What sets us apart is our proactive approach of establishing specific targets and goals before initiating any campaign work. This allows us to measure the incoming data against these goals, ensuring that we stay on track and achieve desired outcomes."
        submenu3="3. Execute"
        subdesc3="This step is analogous to erecting the billboard and ensuring its visibility. As a certified Google Partner, our experts meticulously design and launch your ad campaigns, effectively positioning your 'billboard' on the digital 'highway' for maximum exposure and impact."
        submenu4="4. Optimise"
        subdesc4="Just as you'd make adjustments to a physical billboard based on collected data, we utilize campaign analytics to continuously refine your ads. This iterative process ensures that your ads not only meet but exceed your goals, maximizing their effectiveness and impact within the constraints of a succinct word limit."
        submenu5="5. Scale"
        subdesc5="When a physical billboard demonstrates effectiveness, the logical progression is to acquire more billboard space. Similarly, once we've attained your initial targets, we expand the campaign to reach a broader audience, thereby amplifying your sales revenue within the confines of a succinct word limit."
        lastdesc="  Our Infinity-5 Framework serves as your roadmap to Google Ads success, providing a structured approach that transforms the intricate landscape of online advertising into a streamlined and efficient machine. Trust us to elevate your brand's visibility to the level of a strategically placed billboard on a bustling highway, ensuring maximum exposure and impact within the constraints of a succinct word limit."
      />
      <Section2
        title="Generate Better ROI with a Proven Google Ads Strategy"
        desc1="Replace Guesswork with Concrete Data"
        desc2="If you're weary of purported 'Google Ad gurus' offering excuses and yearn for genuine return-on-investment from your ad spend, it's time to implement our proven, revenue-focused Google Ads strategies. Our strategies have empowered businesses across various industries to outperform competitors and dominate Google search, resulting in over £300m in sales revenue for us and our clients. We're not just discussing impressions, clicks, and landing page views... We're talking about tangible outcomes such as phone calls, leads, and SALES!"
      />
      <Section3
        maintitle="Our proven framework enables us to guarantee success with Google Ads."
        title="Research and Plan"
        desc="We commence by analyzing your competitors and familiarizing ourselves with your business. Subsequently, we devise a bespoke Google Ads strategy centered on the targets necessary to achieve return-on-investment."
        title2="Track & Measure"
        desc2="We implement tracking mechanisms to meticulously measure every aspect of the Google Ads campaign. Additionally, we construct a custom reporting dashboard that incorporates the targets essential for achieving success."
        title3="Execute"
        desc3="As a Google Partner, we leverage our team of Certified Google Ads experts to generate all necessary campaign assets tailored to achieve ROI with your strategy. Subsequently, we execute the strategy meticulously to drive optimal results."
        title4="Optimise"
        desc4="We conduct a series of tests to ascertain what truly works, allowing campaign data to inform our decisions. Even after achieving the set targets, we persist in optimizing for continued improvement."
        title5="Scale"
        desc5="Once we are achieving the desired results, we scale your campaign to generate more sales revenue."
      />
      {/* <Price/> */}
      <Faq
        q1="Why should I hire a Google Ads Agency?"
        a1="Our agency boasts certified Google Ads experts who have effectively overseen various types of ad campaigns, culminating in substantial business growth and revenue enhancement."
        q2="What does a Google Ads Agency do?"
        a2="Before proceeding, our experts will familiarize themselves with your business. Subsequently, they will ascertain the appropriate campaign objective and the type of ad required. Armed with this knowledge, they will develop a customized campaign tailored to achieve your specific business objectives."
        q3="I am  a local business , so are Google Ads the right move for me?"
        a3="Certainly! When executed effectively, location targeting enables expert digital marketers like us to tailor ads to specific locations or areas based on your service areas. This ensures that you see improved results in your immediate vicinity, maximizing the effectiveness of your marketing efforts."
        q4="How does Google Ads work?"
        a4="Google Ads operates on a pay-per-click (PPC) model, where advertisers are charged only when users click on their ads. Ads can take various formats, including text, image, or video. Placement of ads is determined through an auction process, where advertisers bid on keywords relevant to their products or services. Google factors in ad relevance, quality score, and bid amount to rank ads in search results, ensuring the most relevant and high-quality ads are displayed to users."
        q5="How can I improve the performance of my Google Ads campaigns?"
        a5="To enhance the performance of your Google Ads campaigns, prioritize optimizing your ad copy, targeting relevant keywords, refining audience targeting, and improving your landing page experience. Regularly analyze campaign data and make adjustments based on insights to maximize return on investment (ROI)."
      />
      <Footer />
    </div>
  );
}
