
import Navbar from "@/components/navbar/navbar"
import Footer from '@/components/footer/footer'
export const metadata = {
  title: "Local Seo services",
  description: "top digital marketing agency in India ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="width:100vw height:auto  overflow-x-hidden">
      <body >
      <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
