import { useDispatch, useSelector } from "react-redux";
import { IProduct } from "../components/product.interface";
import { EditProductQty, removeProductFromCart } from "../redux/cartReducer";

const Cart = () => {
  const storeData: any = useSelector((state) => state);
  const { products, cost, shipping } = storeData.cart;
  const dispatch = useDispatch();
  
  const editQty = (quantity: number, id: string) => {
      dispatch(EditProductQty({id, quantity}))
  }
  const handleRemove = (product: IProduct) => {
    dispatch(removeProductFromCart(product));
  }
  return (
    <>
    
  <div className="w-full z-10  h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
    <div className="flex  lg:flex-row flex-col justify-center" id="cart">
      {!products.length ? <p className="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800  overflow-x-hidden h-auto">no products</p> : (
      <div className="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800  overflow-x-hidden h-auto" id="scroll">
        {products.map((product: IProduct) => 
          {
           const Qtys = Array.from({length: product.availableItems}, (item, index) => index);
          return (<div key={product.id} className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
            <div className="md:w-4/12 2xl:w-1/4 w-full">
              <img src={product.images[0]} alt="product.name" className="h-full object-center object-cover md:block hidden" />
            </div>
            <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
              <p className="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">RF293</p>
              <div className="flex items-center justify-between w-full pt-1">
                <p className="text-base font-black leading-none text-gray-800 dark:text-white">North wolf bag</p>
                <select  onChange={(e) => editQty(Number(e.target.value), product.id)} aria-label="Select quantity"  className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                {Qtys.map(qty => <option selected= {product.qty === qty + 1}  key={qty}>{qty + 1}</option>)}
                </select>
              </div>
              <p className="text-xs leading-3 text-gray-600 dark:text-white pt-2">Height: 10 inches</p>
              <p className="text-xs leading-3 text-gray-600 dark:text-white py-4">Color: Black</p>
              <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white">Composition: 100% calf leather</p>
              <div className="flex items-center justify-between pt-5">
                <div className="flex itemms-center">
      
                  <p onClick={() => handleRemove(product)} className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                </div>
                <p className="text-base font-black leading-none text-gray-800 dark:text-white mr-6">{product.price}</p>
              </div>
            </div>
          </div>)}
          )}
      </div>)}
      <div className="lg:w-96 md:w-8/12 w-full  h-full lg:py-14 md:px-6 px-4 md:py-8 py-4">
        <div className="flex flex-col h-auto bg-gray-100 dark:bg-gray-900 lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between">
          <div>
            <p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-white">Summary</p>
            <div className="flex items-center justify-between pt-16">
              <p className="text-base leading-none text-gray-800 dark:text-white">Subtotal</p>
              <p className="text-base leading-none text-gray-800 dark:text-white">{cost || 0}</p>
            </div>
            <div className="flex items-center justify-between pt-5">
              <p className="text-base leading-none text-gray-800 dark:text-white">Shipping</p>
              <p className="text-base leading-none text-gray-800 dark:text-white">{products.length ? shipping : 0}</p>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between pt-2">
              <p className="text-2xl leading-normal text-gray-800 dark:text-white">Total</p>
              <p className="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white">{cost ? cost + shipping : 0}</p>
            </div>
            <button  className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Cart