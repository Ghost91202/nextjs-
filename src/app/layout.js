// Import the Inter font correctly
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "PIE BOND",
  description: "Welcome to Pie Bond Digital Marketing Agency, your ultimate partner for revolutionizing brand visibility and business growth. At Pie Bond, we specialize in delivering comprehensive digital marketing solutions crafted for dealerships, healthcare providers, franchises, and entertainment ventures. Elevate your brand with our innovative strategies, cutting-edge technology, and creative brilliance. As a leading full-service digital marketing agency, Pie Bond stands out in dealership marketing, healthcare promotions, franchise expansion, and entertainment industry campaigns. Our dedicated team of experts develops customized strategies, ensuring a targeted and impactful online presence for your brand. Unlock unparalleled success with Pie Bond Digital Marketing Agency&apos;s strategic solutions. Maximize your digital footprint, increase online visibility, and dominate your market niche. Trust us to navigate the dynamic digital landscape and drive results that propel your business forward. Discover the Pie Bond advantage today  where digital marketing excellence meets your brand&apos;s aspirations. digital marketing, full-service agency, dealership marketing, healthcare promotions, franchise expansion, entertainment industry campaigns, online visibility, strategic solutions, business growth, brand revolution, digital footprint, market domination, results-driven",
};

export default function RootLayout( { children } ) {
  return (
    <html lang="en" className="w-screen h-auto  overflow-x-hidden">
      <body className="w-screen overflow-x-hidden">
        {/* <!-- Google tag (gtag.js) --> */}


        <script async src="https://www.googletagmanager.com/gtag/js?id=G-C1DCDT8Q0X"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-C1DCDT8Q0X');
  `,
        }} />


        {children}
      </body>
    </html>
  );
}
