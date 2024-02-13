// Import the Inter font correctly


export const metadata = {
  title: "digital marketing",
  description: "Generated by create next app",
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
