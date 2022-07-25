import { useRouter } from 'next/router'

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IProduct } from '../../components/product.interface';
import { addToCart } from '../../redux/cartReducer';

const Product = () => {
  const router = useRouter();
  const { pid } = router.query;
  const storeData: any = useSelector((state) => state);
  const { allProducts } = storeData.data;
  const product = allProducts.filter((product: IProduct) => product.id.toString() === pid)[0];
  const Qtys = product && product.availableItems && Array.from({length: product.availableItems}, (item, index) => index);

  const [currentImage, setCurrentImage] = useState(0);
  const [currentQty, setCurrentQty] = useState(1);
  const dispatch = useDispatch();
  
  const handleAddToCart = () => {
    const payload: IProduct = {...product, qty: currentQty, }
    dispatch(addToCart(payload))
  }
  return (
    <>
   {product && <div className="py-2 bg-gray-300">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
    <div className="flex flex-col md:flex-row -mx-4">
      <div className="md:flex-1 px-4">
        <div>
          <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
            <div className='h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center'>
              <span className="text-5xl h-64 md:h-80">
                <img className='h-64 md:h-80' src={product.images.length && product.images[currentImage]} alt="" />
              </span>
            </div>
          </div>

            <div className="flex -mx-2 mb-4 bg-gray-100  rounded-lg">
            {product.images.map((url:string, index: number) => (

              <div key={`${url}-${index}`} className="flex-1 px-2 p-1">
                { <button onClick={() => setCurrentImage(index)}  className={`${currentImage === index ? 'ring-2 ring-indigo-300' : '' } focus:outline-none h-24 md:h-32 flex items-center justify-center`}>
                  <span  className="text-2xl ">
                    <img className='h-24 md:h-32' src={url} alt="product details" />
                  </span>
                </button> }
              </div>
                       )) }
          </div>

        </div>
      </div>
      <div className="md:flex-1 px-4">
          <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">Lorem ipsum dolor, sit amet consectetur, adipisicing elit.</h2>
         <p className="text-gray-500 text-sm">By <a href="#" className="text-indigo-600 hover:underline">{product.seller}</a></p>

         <div className="flex items-center space-x-4 my-4">
           <div>
             <div className="rounded-lg bg-gray-100 flex py-2 px-3">
               <span className="text-indigo-400 mr-1 mt-1">$</span>
               <span className="font-bold text-indigo-600 text-3xl">{product.price}</span>
             </div>
           </div>
           {product.discount &&  <div className="flex-1">
             <p className="text-green-500 text-xl font-semibold">Save {product.discount}</p>
             <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
           </div>}
         </div>

         <p className="text-gray-500">{product.description}</p>

         <div className="flex py-4 space-x-4">
           <div className="relative">
             <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">Qty</div>
             <select  onChange={(e) => setCurrentQty(Number(e.target.value))} className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
              {Qtys.map((qty: number) => <option  key={qty}>{qty + 1}</option>)}
             </select>
             <svg className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path  d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
             </svg>
           </div>

            <button onClick={handleAddToCart} type="button" className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
              Add to Cart
            </button>

         </div> 
      </div> 
    </div>
  </div>
   </div>}
    </>
  )
}

export default Product