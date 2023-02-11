import { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

import Reviews from "../components/Reviews";
// import getProducts from '../sfcc.js'

const data = [
  {
    id: 0,
    name: "algae",
    price: 1000,
    longDescription: "Algae",
    imageGroups: "/green2.jpg",
  },
  {
    id: 1,
    name: "algae",
    price: 1000,
    longDescription: "Algae",
    imageGroups: "/green3.jpg",
  },
  {
    id: 2,
    name: "algae",
    price: 1000,
    longDescription: "Algae",
    imageGroups: "/green4.jpg",
  },
  {
    id: 3,
    name: "algae",
    price: 1000,
    longDescription: "Algae",
    imageGroups: "/green6.png",
  },
];

export default function Gallery() {
  let shop = useRef<HTMLParagraphElement>();

  const scrollHandler = (e) => {
    e.preventDefault();
    // @ts-ignore

    shop.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Header scrollHandler={scrollHandler} />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
              Who Sells Green Algae?
            </p>

            <p className="mt-6 text-gray-500 mb-6">
              Jonas Walden and John Collins are the founders and owners of a
              business that specializes in harvesting and processing green algae
              for a variety of applications. With their expertise and
              state-of-the-art facilities, they are able to provide high-quality
              green algae products to their customers.
            </p>
          </div>
        </div>
        <Reviews />
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p
              ref={shop}
              className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl"
            >
              Our Products
            </p>
            <p className="mt-6 text-gray-500 mb-6">
              We accept all kinds of payment methods as long as it is GREEN!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data &&
            data.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </div>
      </div>
    </>
  );
}

// export async function getStaticProps() {
//   const searchResults = await getProducts('Algae')

//   return {
//     props: {
//       data: searchResults,
//     },
//   }
// }
