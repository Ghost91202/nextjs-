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
        "Custom Software Development: How do you ensure effective and scalable solutions?",
      answer:
        "Our team of JavaScript developers excels in crafting custom software solutions. We follow industry best practices, employing agile methodologies to ensure effective and scalable development. Through continuous testing and iteration, we deliver robust and tailored solutions that meet your business needs.",
    },
    {
      question: "Code Management: How do you handle and organize code repositories?",
      answer:
        "We implement advanced code management techniques, utilizing version control systems like Git. Our developers follow organized coding structures and documentation, ensuring clear collaboration, efficient debugging, and easy scalability for your projects.",
    },
    {
      question:
        "Tech Stack Selection: How do you choose the right technologies for projects?",
      answer:
        "We stay at the forefront of JavaScript technologies, carefully selecting the best frameworks, libraries, and tools for each project. Our expertise in React, Node.js, and other JavaScript technologies ensures optimal performance and future-proof solutions.",
    },
    {
      question:
        "Analytics and Performance Monitoring: What insights do you provide for software performance?",
      answer:
        "Our analytics cover a range of metrics, including response times, error rates, and user interactions. We provide detailed reports with actionable insights, allowing you to enhance and optimize your software solutions for superior performance.",
    },
    {
      question: "Automation in Development: How can automation benefit my projects?",
      answer:
        "Automation in development accelerates processes through tools like continuous integration and deployment. It ensures efficient testing, code reviews, and deployment, saving time and enhancing overall project efficiency for superior results.",
    },
];


  return (
    <div ClassName="flex flex-col ">
      <Navbar />
      <Banner />
      <Proven
    title1="Proven Solutions"
    desc1="Discover a collection of proven JavaScript development strategies, meticulously designed and backed by industry expertise. Our solutions are tailored to strengthen your digital projects and deliver tangible results for your business."
    title2="Skilled Developers"
    desc2="Harness the expertise of our certified JavaScript developers who are dedicated to optimizing your development endeavors. Stay ahead of technological advancements with a team committed to delivering top-notch solutions for your business."
    title3="Reliable Performance"
    desc3="Witness the impact of our unwavering commitment to performance. We combine technical proficiency, innovation, and personalized JavaScript development strategies to ensure your success in the ever-evolving digital landscape."
/>

<ServiceCard
    title="Expert JavaScript Development Services in India"
    desc="In the ever-evolving tech landscape, JavaScript stands as a dynamic powerhouse for web and application development. At Your-JS-Dev, we understand the profound significance of JavaScript and present specialized development services, meticulously crafted for your projects' unprecedented success. Experience a strategic methodology in JavaScript development that guarantees your projects seize the boundless opportunities, resulting in innovative and scalable solutions."
    cardTitle1="Custom Software Development"
    desc1="Elevate your projects with custom JavaScript solutions. Our developers excel in crafting tailored software solutions using the latest JavaScript frameworks and libraries for optimal performance and scalability."
    cardTitle2="Code Quality Assurance"
    desc2="Ensure robust and scalable development with our meticulous code audits. We analyze every line of code for efficiency, security, and adherence to best practices, providing you with a reliable and maintainable codebase."
    cardTitle3="Framework Expertise"
    desc3="Leverage the power of JavaScript frameworks. Our developers are skilled in utilizing frameworks like React, Angular, and Vue.js to build dynamic and responsive web applications that meet modern industry standards."
    cardTitle4="Performance Monitoring and Optimization"
    desc4="Dive into data-centric decision-making with our robust analytics. Gain insights into application performance, user interactions, and overall efficiency for continuous improvement and optimization."
    cardTitle5="Automated Testing and Deployment"
    desc5="Accelerate development processes with automated testing and deployment. Our team implements continuous integration tools to ensure efficient testing, code reviews, and seamless deployment for your projects."
    cardTitle6="Innovative Tech Stack Selection"
    desc6="Stay at the forefront of JavaScript technologies with our expertise in selecting the best frameworks, libraries, and tools for each project. We ensure your projects are developed using the latest and most suitable technologies."
/>

      <Faq1 faqData={faqData} />
      <Drawer
    title="Understanding JavaScript Development"
    button="Explore Our JavaScript Development"
    desc1="Discover Your-JS-Dev, your gateway to innovative and scalable JavaScript development. Unlike conventional solutions, we transform your ideas into powerful digital experiences. If we don't exceed your expectations, our service is on us."
    Img1={seoimg}
    title2="Our 5-stage process for effective JavaScript Development services:"
    submenu1="1. Conceptualize & Plan"
    subdesc1="Craft a solid development plan by analyzing project requirements and defining a clear roadmap for successful implementation."
    submenu2="2. Code & Test"
    subdesc2="Implement cutting-edge JavaScript solutions with our skilled developers. Rigorous testing ensures the reliability and efficiency of your applications."
    submenu3="3. Deploy & Monitor"
    subdesc3="Deploy your applications seamlessly and monitor their performance in real-time. We ensure your projects are running smoothly and efficiently."
    submenu4="4. Optimize & Upgrade"
    subdesc4="Continuously optimize your applications for peak performance. We stay updated with the latest JavaScript technologies to provide regular upgrades and enhancements."
    submenu5="5. Scale & Expand"
    subdesc5="Expand the capabilities of your applications by scaling your infrastructure. We help you adapt to growing demands and stay ahead in the competitive digital landscape."
    lastdesc="Achieve the technological excellence your projects deserve in the digital world.

    Ready to elevate your projects? Explore Your-JS-Dev's JavaScript Development services now!"
/>

<Section2
    title="Enhance ROI with Proven JavaScript Development Strategies"
    desc1="Discover the proven strategies that industry leaders are leveraging to excel in the digital landscape and achieve outstanding ROI. Are you tired of uncertain development approaches? Our solutions have powered numerous successful projects, implementing cutting-edge technologies, achieving optimal performance, and exceeding client expectations. Elevate your projects and outpace the competition in just months!"
    desc2="Key Highlights:

    -Proven strategies for guaranteed results
    -Cutting-edge technologies for optimal performance
    -Exceeding client expectations with successful projects
    -Continuous adaptation to industry trends
    -Ready to elevate your development game? Learn more about our proven strategies now!"
/>

<Section3
    maintitle="With our tried-and-tested framework, we confidently assure success in JavaScript Development"
    title="Conceptualize & Plan"
    desc="Formulate a robust development plan by analyzing project requirements, defining clear objectives, and outlining a strategic roadmap for successful implementation."
    title2="Code & Test"
    desc2="Implement cutting-edge JavaScript solutions with our skilled developers. Rigorous testing ensures the reliability and efficiency of your applications."
    title3="Deploy & Monitor"
    desc3="Seamlessly deploy your applications and monitor their performance in real-time. We ensure your projects are running smoothly and efficiently."
    title4="Optimize & Upgrade"
    desc4="Continuously optimize your applications for peak performance. We stay updated with the latest JavaScript technologies to provide regular upgrades and enhancements."
    title5="Scale & Expand"
    desc5="Expand the capabilities of your applications by scaling your infrastructure. We help you adapt to growing demands and stay ahead in the competitive digital landscape."
/>

      {/* <Price/> */}
      <Faq
    q1="What JavaScript frameworks offer effective development opportunities?"
    a1="The choice depends on your project requirements and goals. We strategically select frameworks such as React, Angular, and Vue.js, tailoring our approach to meet the unique needs of your development projects."
    q2="Which JavaScript libraries and tools do you work with?"
    a2="Our team is proficient in utilizing a wide range of JavaScript libraries and tools, including but not limited to jQuery, Redux, Axios, and Webpack. We stay updated with the latest tools to ensure efficient and modern development practices."
    q3="How do your JavaScript development services work?"
    a3="From initial consultation to project delivery, we specialize in conceptualizing, coding, testing, and deploying JavaScript solutions. Our comprehensive services cover front-end and back-end development, ensuring seamless and optimized project outcomes."
    q4="Which industries have you served in JavaScript development?"
    a4="We have collaborated across diverse industries, from e-commerce to healthcare and finance. Explore our portfolio for a glimpse into the variety of projects we have successfully delivered."
    q5="When should I opt for JavaScript development services?"
    a5="JavaScript development is ideal for a wide range of projects, from dynamic single-page applications to server-side development. If you're looking to build interactive and responsive web solutions, JavaScript is a key technology. Our services can cater to startups, enterprises, and everything in between, ensuring tailored solutions for your specific needs."
/>

      <Footer />
    </div>
  );
}
