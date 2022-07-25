import styles from '../styles/Home.module.css';

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
function Footer() {
  return (
    <footer className='grid grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2 py-16 p-5 sm:grid-cols-2  bg-black text-white'>
     <div >
        <h6 >ABOUT</h6>
        <p className='pt-5 pr-5 text-sm text-gray-300 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore in repellendus ullam odit corporis nesciunt quia</p>
     </div>
     <div>
        <h6 >CONTACT</h6>
        <p className='pr-5 text-sm text-gray-300 mt-2'>
            156-177-234-567-3122<br /> wave@bloowatch.com <br /> spain
        </p>
     </div>
     <div>
        <h6>USEFULL LINKS</h6>
        <ul className='pr-5 text-sm text-gray-300 mt-2'>
            <li><a href="">About us</a></li>
            <li><a href="">History</a></li>
            <li><a href="">Contact us</a></li>
        </ul>
     </div>
     <div>
        <h6>INSTGRAM</h6>
        <div className='grid grid-cols-4 gap-x-2 mt-2 '>
            <img
                alt="Mountains"
                src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                className="w-full h-full object-center object-cover group-hover:opacity-75"
            />
            <img
                alt="Mountains"
                src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                className="w-full h-full object-center object-cover group-hover:opacity-75"
            />
            <img
                alt="Mountains"
                src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                className="w-full h-full object-center object-cover group-hover:opacity-75"
            />
            <img
                alt="Mountains"
                src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                className="w-full h-full object-center object-cover group-hover:opacity-75"
            />
        </div>
        </div>
    </footer>
  )
}

export default Footer