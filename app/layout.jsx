'use client'
import Header from "./components/Header";
import Footer from "./components/Footer";
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import "./globals.scss";
import { Jost } from 'next/font/google'
import { store } from './store/index'
import { Provider, useDispatch } from 'react-redux'
import axios from "axios";
import { Suspense, useEffect } from "react";
import { getCategories } from "./store/slices/categoriesSlice";
import Loading from './components/Loading'


const jost = Jost({ subsets: ['latin'] })
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL


function MainInitializations({ children }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  return children
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={jost.className}>
          <MainInitializations>
            <Header></Header>
            <Suspense fallback={<Loading></Loading>}>
              {children}
            </Suspense>
            <Footer></Footer>
          </MainInitializations>
        </body>
      </Provider>
    </html>
  );
}
