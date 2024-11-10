// import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import HomePage from "../container/HomePage";
import Advertising from "../container/Advertising";
import Category from "../container/Category";
import Advertising_2 from "../container/Advertising_2";
export default function Home() {
  return (
    <div>
      <Header />
      <HomePage />
      <Advertising />
      <Category />
      <Advertising_2/>
      <Footer />
    </div>
  );
}
