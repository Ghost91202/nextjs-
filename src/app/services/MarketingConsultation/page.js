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
        "Marketing Strategy Development: How do you create effective marketing strategies?",
      answer:
        "Our team of seasoned consultants develops tailored marketing strategies by analyzing market trends, consumer behavior, and your business objectives. We focus on aligning your marketing efforts with your overall business goals to maximize impact and ROI.",
    },
    {
      question: "Audience Segmentation: How do you identify and target specific audiences?",
      answer:
        "We employ sophisticated audience segmentation techniques, leveraging data on demographics, psychographics, and customer behavior. This allows us to create highly targeted campaigns that resonate with your audience and drive meaningful engagement.",
    },
    {
      question:
        "Brand Visibility: How can you enhance my brand's visibility in the market?",
      answer:
        "We implement comprehensive brand visibility strategies, incorporating digital and traditional channels. From social media presence to content marketing, we ensure your brand is consistently visible, leaving a lasting impression on your target audience.",
    },
    {
      question:
        "Performance Metrics: What key metrics do you track to measure marketing success?",
      answer:
        "Our analytics encompass a wide array of performance metrics, including customer acquisition cost, conversion rates, customer lifetime value, and more. We provide detailed reports with actionable insights to continually optimize and improve your marketing efforts.",
    },
    {
      question: "Marketing Technology: How can technology enhance my marketing efforts?",
      answer:
        "We leverage cutting-edge marketing technology to automate processes, personalize campaigns, and optimize performance. Integrating the right tools ensures efficiency, scalability, and a competitive edge in the ever-evolving landscape of digital marketing.",
    },
  ];
  

  return (
    <div ClassName="flex flex-col ">
      <Navbar />
      <Banner />
      <Proven
  title1="Proven Strategies"
  desc1="Discover an array of proven marketing strategies meticulously designed and backed by data. These strategies are customized to strengthen your overall marketing approach and deliver tangible results for your business."
  title2="Certified Consultants"
  desc2="Harness the expertise and skills of our certified consultants dedicated to optimizing your marketing efforts. Stay abreast of industry trends with a team committed to providing top-notch solutions tailored to your business needs."
  title3="Results Assurance"
  desc3="Witness the impact of our steadfast commitment to delivering results. We combine expertise, innovation, and personalized marketing strategies to ensure your success in the dynamic landscape of digital marketing."
/>

<ServiceCard
  title="Strategic Marketing Consultation Services in India"
  desc="In the dynamic realm of digital marketing, social media serves as a potent force for brand engagement and growth. At Pie-Bond Consultations, we recognize the pivotal role of social media and offer specialized management services tailored for your brand's unparalleled advancement. Experience a strategic approach to social media marketing that ensures your brand capitalizes on the limitless opportunities across diverse platforms, yielding substantial results."
  cardTitle1="Strategic Marketing Planning"
  desc1="Elevate your brand with meticulously planned marketing strategies, aligning with your business objectives for maximum impact and return on investment."
  cardTitle2="Personalized Campaign Automation"
  desc2="Harness the power of automated workflows to streamline your campaigns. Our experts design personalized customer journeys, enhancing relevance and driving conversions."
  cardTitle3="Data-Driven Decision-Making"
  desc3="Delve into data-centric decision-making with our robust analytics. Gain insights into campaign performance, audience behavior, and overall effectiveness for continuous improvement."
  cardTitle4="Audience Segmentation and Targeting"
  desc4="Optimize your target audience with advanced segmentation techniques. Deliver tailored messages that resonate with specific audience segments, ensuring higher engagement and conversion rates."
  cardTitle5="Responsive Design and Testing"
  desc5="Ensure your marketing materials look impressive across devices. Our team prioritizes responsive design and A/B testing to maximize the impact of your campaigns."
  cardTitle6="Compelling Content Creation"
  desc6="Captivate your audience with persuasive content. Our creative team blends compelling copywriting with visually appealing designs to drive meaningful interactions and fortify your brand presence."
/>

      <Faq1 faqData={faqData} />
      <Drawer
  title="Unlocking Effective Marketing Strategies"
  button="Explore Our Marketing Consultation"
  desc1="Discover Pie-Bond Consultations, your strategic partner for dynamic brand growth in the ever-evolving digital landscape. Unlike static approaches, we transform casual interest into lasting customer relationships. If we don't enhance your marketing effectiveness, our consultation is on us."
  Img1={seoimg} 
  title2="Our 5-stage process for effective Marketing Consultation services:"
  submenu1="1. Research & Planning"
  subdesc1="Identify optimal strategies by analyzing competitors and developing distinctive plans for your brand's market presence."
  submenu2="2. Tracking & Measurement"
  subdesc2="Utilize advanced tracking tools to assess engagement metrics and gather valuable data for informed decision-making."
  submenu3="3. Execution"
  subdesc3="Implement attention-grabbing strategies, content, and elements for your brand's online presence."
  submenu4="4. Optimization"
  subdesc4="Experiment with various approaches to refine and enhance engagement, continuously optimizing your marketing efforts."
  submenu5="5. Scaling"
  subdesc5="Expand your reach by amplifying successful strategies, similar to expanding your brand's presence across multiple platforms."
  lastdesc="Attain the recognition and visibility your brand deserves in the digital world. Ready to elevate your marketing game? Explore Pie-Bond Consultations now!"
/>

<Section2
  title="Unlock Better ROI with Proven Marketing Strategies"
  desc1="Explore the proven strategies that industry leaders use to dominate the market and achieve remarkable ROI. Tired of uncertain marketing channels? Our solutions have delivered over 2,480 page 1 Google rankings, increased organic traffic by 140%, and generated 8,000+ high-quality leads. Seize market share and establish your online dominance in just a few months!"
  desc2="Key Highlights:

  - Proven strategies for guaranteed results
  - Over 2,480 page 1 Google rankings
  - 140% growth in organic traffic
  - 8,000+ high-quality leads delivered
  - Ready to elevate your marketing game? Learn more about our proven strategies now!"
/>

<Section3
  maintitle="Empowering Success in Social Media Marketing with Our Proven Framework"
  title="Research & Planning"
  desc="Uncover effective engagement tactics from your competitors. Analyze your business, set targets, and tailor a social media strategy with at least five themes to enhance your brand presence."
  title2="Tracking & Measurement"
  desc2="Utilize proven engagement tactics from your competitors. Analyze your business, set targets, and craft a customized social media strategy with at least five themes."
  title3="Execution"
  desc3="Leverage our team of social media experts to create assets necessary for executing your strategy and expanding your follower base."
  title4="Optimization"
  desc4="Conduct extensive testing to identify what resonates best, gaining valuable insights into the elements that drive success for your brand."
  title5="Scaling"
  desc5="Boost your social media following by amplifying successful strategies once desired results are achieved, ensuring sustained growth for your brand."
/>

      {/* <Price/> */}
      <Faq
  q1="Which social media platforms offer effective marketing opportunities?"
  a1="The efficacy depends on your business, sector, and audience. We adeptly identify and utilize platforms where your target demographic actively engages."
  q2="What social media channels do you work with?"
  a2="Our team excels in managing campaigns on Facebook, Instagram, and LinkedIn, and we remain adaptable to evolving platforms, ensuring exceptional outcomes for your brand."
  q3="How do your social media marketing services work?"
  a3="From strategy consultation to comprehensive channel management, we specialize in crafting strategies, curating content, managing communities, and providing insightful reporting. Our services adapt to diverse requirements to ensure optimal results."
  q4="Which industries have you worked with in social media marketing?"
  a4="We collaborate across diverse sectors, from global manufacturers to local service enterprises. Explore our case studies for insights into our expertise and successful partnerships."
  q5="When should I use social media marketing?"
  a5="In the realm of social media marketing, transparency regarding achievable outcomes is paramount. Typically, the primary objective revolves around augmenting brand visibility, cultivating credibility, and building trust. While generating leads or sales may pose challenges initially, we can assist you in cultivating a dedicated following. Once established, we can help you transform it into a lucrative channel, mirroring our success with other clients."
/>

      <Footer />
    </div>
  );
}
