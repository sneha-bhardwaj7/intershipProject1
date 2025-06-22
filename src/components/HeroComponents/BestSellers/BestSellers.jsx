import React from "react";
import Marquee from "react-fast-marquee";
import bananaChips1 from "../../../assets/chips1.png"; // Replace with real paths
import pickleJar from "../../../assets/pickle1.png";
import bananaChips2 from "../../../assets/chips2.png";
import pickleJar2 from "../../../assets/pickles2.png";
import Carousel from "../Carousel/Carousel";


// const products = [
//   {
//     id: 1,
//     name: "Product Name",
//     benefits: "Product Benefits",
//     price: "Rs150",
//     image: bananaChips1,
//   },
//   {
//     id: 2,
//     name: "Product Name",
//     benefits: "Product Benefits",
//     price: "Rs150",
//     image: pickleJar,
//   },
//   {
//     id: 3,
//     name: "Product Name",
//     benefits: "Product Benefits",
//     price: "Rs150",
//     image: bananaChips2,
//   },
//   {
//     id: 4,
//     name: "Product Name",
//     benefits: "Product Benefits",
//     price: "Rs150",
//     image: pickleJar2,
//   },
//   // You can duplicate or add more for demo
// ];

const BestSellers = () => {
  return (
    <div className="py-12 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">BESTSELLERS</h2>

      <Carousel/>
    </div>
  );
};

export default BestSellers;
