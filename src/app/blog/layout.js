

export const metadata = {
  title: "Digital Marketing agency",
  description: "top digital marketing agency in India ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="width:100vw height:auto  overflow-x-hidden">
      <body >{children}</body>
    </html>
  );
}
