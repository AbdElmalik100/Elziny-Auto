import Header from "./components/Header";
import Footer from "./components/Footer";
import 'swiper/css';
import 'swiper/css/scrollbar';
import "./globals.scss";
import {Jost} from 'next/font/google'

const jost = Jost({subsets: ['latin']})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
