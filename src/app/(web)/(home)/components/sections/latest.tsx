import getProducts from "@/service/product";
import { use } from "react";

export function Latest() {
  const products: [] = use(getProducts());

  return (
    <div className='grid grid-cols-6 gap-2 '>
      {products.map((product: object & { id: string; name: string }) => {
        return (
          <h1 className='text-white' key={product.id}>
            {product.name}
          </h1>
        );
      })}
    </div>
  );
}
