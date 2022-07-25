import { IProduct } from "./product.interface";
import { useSelector } from "react-redux";
import Link from "next/link";

function ProductList() {
    const storeData: any = useSelector((state) => state);
    const { filteredProducts } = storeData.data;

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 text-center">
          { !filteredProducts.length ? <p>no products!</p> : filteredProducts.map((product: IProduct) => (
            <Link  key={product.id}  href={`/products/${product.id}`}>
                <div className="relative max-w-md mx-auto xl:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
                <div data-testid={`productCard-${product.id}`} className="card">
                <div className="card-header mx-4 -mt-6">
                    <img
                    src={product.images[0]}
                    alt={product.imageAlt}
                    className="w-auto rounded-lg"
                    />
                </div>
                <div className="card-body pb-5">
                <h3 className="mt-4 text-sm text-gray-700 font-bold">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-white text-sm mx-auto  w-20 bg-indigo-600">${product.price}</p>
                </div>
                </div>
               </div>
            </Link>
          ))}
        </div>
      </div>
    </div>

  )
}

export default ProductList