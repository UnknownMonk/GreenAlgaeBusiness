import Image from "next/image";
import { useRouter } from "next/router";

export default function Product() {
  try {
    const product = [
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

    const router = useRouter();
    let ids = +router.query.slug;

    return (
      <div className="flex h-screen flex-col justify-between">
        <div className="mx-auto mt-16 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mx-auto flex flex-col sm:flex-row">
            <Image
              alt="Algae"
              className="rounded-lg"
              src={product[ids].imageGroups}
              width={560}
              height={640}
            />
            <div className="mt-10 flex flex-col sm:mt-0 sm:ml-10">
              <h1 className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
                {product[ids].name}
              </h1>
              <h1 className="mt-3 text-4xl font-bold text-gray-500 sm:text-3xl sm:tracking-tight lg:text-3xl">
                ${product[ids].price}
              </h1>
              <div className="mt-10 mb-5 border-t border-gray-200 pt-10 font-bold">
                Description
              </div>
              <p className="max-w-xl">{product[ids].longDescription}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {}
}

// export async function getStaticProps({ params }) {
//   const searchResults = await getProducts(params.slug)
//   const coffeeProduct = searchResults[0]

//   return {
//     props: {
//       product: coffeeProduct,
//     },
//   }
// }

// export async function getStaticPaths() {
//   const coffeeProducts = await getProducts('coffee')
//   let fullPaths = []

//   for (let product of coffeeProducts) {
//     fullPaths.push({ params: { slug: product.id } })
//   }

//   return {
//     paths: fullPaths,
//     fallback: 'blocking',
//   }
// }
