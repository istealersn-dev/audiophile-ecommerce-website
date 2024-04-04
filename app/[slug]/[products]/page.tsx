// import { RelatedProduct } from "@/app/components/product/RelatedProduct/RelatedProduct";
// import { GET_PRODUCTPAGE_DATA } from "@/app/lib/graphql/queries";
// import { fetchGraphQL } from "@/app/lib/graphqlClient";
// import { ProductDetailsPages } from "@/app/lib/types/products";
// import { notFound } from "next/navigation";

// const queryString = GET_PRODUCTPAGE_DATA.loc?.source.body;

// export const dynamicParams = false;

// /**
//  * Generate static parameters based on template product details.
//  *
//  * @return {Array} An array of objects with a 'slug' property.
//  */
// export async function generateStaticParams() {
//   const { templateProductDetails } = await fetchGraphQL<ProductDetailsPages>(
//     queryString!
//   );
//   return templateProductDetails.map((product) => ({
//     slug: product.slug,
//   }));
// }

// export default async function ProductDetailPage({
//   params,
// }: {
//   params: { 
//     slug: string 
//     products: string
//   };
// }) {
//   const { templateProductDetails } = await fetchGraphQL<ProductDetailsPages>(queryString!);
  
//   const product = templateProductDetails.find((product) => product.slug === params.products);

//   if (!product) return notFound();

//   return (
//     <>
//       {templateProductDetails.map((item) => (
//         <main key={item.id}>
//           {item.components.map((component) => {
//             if ((component.__typename === 'RelatedProduct'))
//               return (
//                 <RelatedProduct
//                   key={component.id}
//                   sectionHeading={component.sectionHeading}
//                   cardGrid={component.cardGrid}
//                 />
//               );
//           })}
//         </main>
//       ))}
//     </>
//   );
// }
