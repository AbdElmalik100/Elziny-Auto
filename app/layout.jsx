import Header from "./components/Header";
import Footer from "./components/Footer";
import 'swiper/css';
import 'swiper/css/scrollbar';
import "./globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
