// Import the Inter font correctly


export const metadata = {
  title: "digital marketing",
  description: "digital marketing, full-service agency, dealership marketing, healthcare promotions, franchise expansion, entertainment industry campaigns, online presence, SEO strategies, social media dominance, conversion-focused tactics, sustainable growth",
};

export default function RootLayout( { children } ) {
  return (
    <html lang="en" className="w-screen h-auto  overflow-x-hidden">
      <body className="w-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
