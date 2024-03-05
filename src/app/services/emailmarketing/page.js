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
      question:
        "YouTube Ad Creation: How do you ensure effective YouTube advertising campaigns?",
      answer:
        "Our team of experts follows best practices in YouTube advertising, creating compelling video content and optimizing visuals. We leverage A/B testing to refine ad elements, ensuring maximum effectiveness in capturing audience attention and engagement.",
    },
    {
      question: "Audience Targeting: How do you reach the right audience with YouTube ads?",
      answer:
        "We implement advanced audience targeting strategies, considering factors such as demographics, interests, and online behavior. This precise targeting ensures that your YouTube ads are seen by the most relevant audience, increasing the likelihood of conversions.",
    },
    {
      question:
        "Ad Visibility: How do you ensure that YouTube ads gain visibility and engagement?",
      answer:
        "We prioritize YouTube ad visibility through strategic placements, compelling thumbnails, and adherence to platform guidelines. Our dedicated team monitors performance metrics to optimize ad delivery and enhance overall visibility and engagement rates.",
    },
    {
      question:
        "Analytics and Reporting: What insights do you provide for YouTube ad performance?",
      answer:
        "Our analytics cover a range of metrics, including views, click-through rates, conversion rates, and more. We provide comprehensive reports with actionable insights, allowing you to refine and improve your future YouTube advertising strategies.",
    },
    {
      question: "Automation: How can automation enhance my YouTube advertising campaigns?",
      answer:
        "Automation streamlines your YouTube ad campaigns by optimizing targeting based on user behavior, preferences, and performance data. It saves time, increases relevance, and enhances overall campaign efficiency, leading to improved results on the YouTube platform.",
    },
  ];
  

  return (
    <div ClassName="flex flex-col ">
      <Navbar />
      <Banner />
      <Proven
  title1="Proven YouTube Ad Tactics"
  desc1="Discover a collection of proven YouTube advertising tactics, meticulously designed and backed by data. These strategies are tailored to enhance your brand visibility on YouTube and drive tangible results for your business."
  title2="Certified YouTube Ad Experts"
  desc2="Harness the knowledge and skills of our certified professionals dedicated to optimizing your YouTube advertising campaigns. Stay ahead of YouTube advertising trends with a team committed to delivering top-notch solutions for your business."
  title3="Guaranteed YouTube Ad Results"
  desc3="Witness the impact of our unwavering commitment to YouTube advertising results. We blend expertise, innovation, and personalized strategies to ensure your success in the dynamic YouTube advertising landscape."
/>

<ServiceCard
  title="Expert YouTube Ads Agency in India"
  desc="In the ever-evolving digital marketing landscape, YouTube emerges as a dynamic platform for brand visibility and expansion. At Pie-Bond, we recognize the profound significance of YouTube advertising and offer specialized management services, meticulously crafted for your brand's unprecedented growth. Experience a strategic methodology in YouTube advertising that ensures your brand seizes the vast opportunities on the platform, resulting in substantial outcomes."
  cardTitle1="Strategic YouTube Ad Campaign Management"
  desc1="Elevate your brand with precisely crafted YouTube ad campaigns. Leverage our expertise in audience targeting and tailored video content creation for optimal engagement and conversions."
  cardTitle2="Personalized Automation Initiatives"
  desc2="Harness the potential of automated workflows to streamline your YouTube ad campaigns. Our experts design personalized customer journeys, enhancing relevance and driving meaningful interactions."
  cardTitle3="Data Analytics for Informed Decision-Making"
  desc3="Dive into data-centric decision-making with our robust analytics. Gain insights into YouTube ad performance, viewer behavior, and campaign effectiveness for continuous improvement."
  cardTitle4="Audience Targeting and Segmentation"
  desc4="Optimize your YouTube ad targeting with advanced segmentation techniques. Deliver targeted messages that resonate with specific audience segments, ensuring higher visibility and engagement rates."
  cardTitle5="Compelling Video Content Creation"
  desc5="Ensure your YouTube ads stand out with captivating video content. Our creative team blends persuasive storytelling with visually appealing designs to drive meaningful interactions and strengthen your brand presence."
  cardTitle6="Strategic Placement and Testing"
  desc6="Maximize the impact of your YouTube ads through strategic placement and A/B testing. Ensure your ads resonate effectively across different audiences and enhance overall campaign performance."
/>

      <Faq1 faqData={faqData} />
      <Drawer
  title="Unlock the Power of YouTube Ads"
  button="Explore Our YouTube Advertising Solutions"
  desc1="Discover Pie-Bond's YouTube Advertising, your strategic channel for dynamic brand visibility and engagement. Unlike traditional ads, we convert viewers into engaged customers. If we don't enhance your brand's presence, our service is free."
  Img1={seoimg} // Replace with your YouTube Ads image
  title2="Our 5-stage process for effective YouTube Advertising services:"
  submenu1="1. Research & Plan"
  subdesc1="Identify optimal target audiences by analyzing competitors and crafting compelling video content for your YouTube presence."
  submenu2="2. Track & Measure"
  subdesc2="Utilize tracking tools to assess views, click-through rates, and gather valuable data for informed decision-making."
  submenu3="3. Execute"
  subdesc3="Create and launch attention-grabbing YouTube ads, incorporating visually appealing elements for maximum engagement."
  submenu4="4. Optimize"
  subdesc4="Experiment with different ad elements, storytelling approaches, and CTAs to refine and enhance audience interaction."
  submenu5="5. Scale"
  subdesc5="Expand your reach by amplifying successful strategies, similar to running ads on multiple YouTube channels."
  lastdesc="Achieve the recognition and visibility your brand deserves in the digital world."
/>

<Section2
  title="Boost Your ROI with Proven YouTube Advertising Strategies"
  desc1="Unlock the proven strategies your competitors use to dominate the digital landscape and achieve exceptional ROI. Tired of uncertain marketing channels? Our solutions have propelled brands with over 2,480 top-ranking YouTube videos, a 140% surge in organic views, and the delivery of 8,000+ high-quality leads. Seize market share and establish online dominance in just months!"
  desc2="Key Highlights:

  - Proven strategies for guaranteed YouTube ad results
  - Over 2,480 top-ranking YouTube videos
  - 140% growth in organic YouTube views
  - 8,000+ high-quality leads delivered
  - Ready to elevate your YouTube advertising game? Explore more about our proven strategies now!"
/>

<Section3
  maintitle="With our tried-and-tested framework, we confidently assure success in YouTube advertising"
  title="Research & Plan"
  desc="Uncover proven engagement tactics from top-performing YouTube channels. Analyze your business, set targets, and craft a tailored YouTube advertising strategy with at least five compelling video themes."
  title2="Track & Measure"
  desc2="Utilize advanced tracking tools to measure views, click-through rates, and other key metrics. Analyze your YouTube advertising performance, set targets, and refine your strategy based on valuable data."
  title3="Execute"
  desc3="Leverage our team of YouTube advertising experts to develop captivating video assets needed to execute your strategy and expand your audience on the platform."
  title4="Optimize"
  desc4="Conduct extensive A/B testing to determine the most effective ad elements, gaining invaluable insights into what drives success for your brand on YouTube."
  title5="Scale"
  desc5="Enhance your YouTube presence by scaling up successful strategies once desired results are achieved. Expand your reach and achieve sustainable growth on the YouTube platform."
/>

      {/* <Price/> */}
      <Faq
  q1="Which video platforms offer effective advertising opportunities?"
  a1="The effectiveness depends on your business, sector, and audience. We adeptly identify platforms where your target demographic actively engages, ensuring optimal results for your YouTube advertising campaigns."
  q2="Which video channels do you work with?"
  a2="Our team excels in YouTube advertising, with expertise in crafting compelling video content for optimal engagement. We stay adaptable to evolving platforms, ensuring exceptional outcomes in the dynamic landscape of video advertising."
  q3="How do your YouTube advertising services work?"
  a3="From strategic planning to comprehensive ad campaign management, we specialize in crafting YouTube advertising strategies, video content creation, audience targeting, and insightful reporting, adapting to diverse requirements to maximize the impact of your campaigns."
  q4="Which industries have you worked with in YouTube advertising?"
  a4="We collaborate across diverse sectors, from global brands to local businesses, delivering successful YouTube advertising campaigns. Explore our case studies for insights into our expertise in driving results for various industries."
  q5="When should I use YouTube advertising?"
  a5="In the realm of YouTube advertising, transparency regarding achievable outcomes is paramount. Typically, the primary objective revolves around enhancing brand visibility and cultivating credibility. Without leveraging YouTube advertising or building a substantial audience, generating leads or conversions may pose challenges. However, we can assist you in cultivating a dedicated following and transforming it into a lucrative channel once you've established a loyal fan base, mirroring our success with other clients."
/>

      <Footer />
    </div>
  );
}
