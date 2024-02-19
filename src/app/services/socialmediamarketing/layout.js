// Import the Inter font correctly


export const metadata = {
  title: "digital marketing",
  description: "Generated by create next app",
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
