export default async function Checkout() {
  return (
    <>
      <h1>Checkout</h1>
      <section className="grid grid-cols-4 gap-4">
        <div className="col-span-3 bg-surface p-4">
          <div className="grid grid-cols-7">
            <h4 className="col-span-3">Item</h4>
            <h4 className="col-span-2">Quantity</h4>
            <h4 className="col-span-2">Total</h4>
          </div>
        </div>
        <div className="bg-surface p-4">
          <h4>Summary</h4>
          <dl>
            <div className="flex justify-between">
              <dt>Sub total</dt>
              <dd>$100</dd>
            </div>
            <div className="flex justify-between">
              <dt>Discount</dt>
              <dd>$100</dd>
            </div>
            <div className="flex justify-between">
              <dt>Delivery</dt>
              <dd>$100</dd>
            </div>
            <div className="flex justify-between border-t border-accentLight">
              <dt className="font-bold">Total</dt>
              <dd className="font-bold">$100</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}

// const FetchProduct = async ({ category }) => {
//   const url = category
//     ? `https://dummyjson.com/products/category/${category}`
//     : `https://dummyjson.com/products`;

//   const response = await fetch(url);
//   const { products } = await response.json();
//   return (
//     <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//       {products.map((product) => (
//         <CardComponent key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };
