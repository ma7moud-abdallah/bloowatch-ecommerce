import React from 'react';
import Home from '.';
import { IProduct } from '../components/product.interface';

import { render,  screen } from '../test.utils';


const mockedProducts: IProduct[] = [
    {
      id: '1',
      name: 'Earthen Bottle',
      price: 48,
      images: ['https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg', 'https://www.huaweinewos.com/wp-content/uploads/2021/01/huawei-matebook-13-2021-01.jpg', 'https://i.ibb.co/6gzWwSq/Rectangle-20-1.png', 'https://i.ibb.co/6gzWwSq/Rectangle-21-1.png'],
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quas recusandae cumque est repellendus vel atque quae optio iusto. Impedit facere corporis ratione voluptas ipsam doloribus modi repellat sunt libero!',
      seller: 'amazone',
      sellerHref: '#',
      availableItems: 5,
      discount: 12,
      category: 'new-arrivals'
    },
    {
      id: '2',
      name: 'Nomad Tumbler',
      price: 35,
      images: ['https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg', 'https://i.ibb.co/6gzWwSq/Rectangle-20-1.png', 'https://i.ibb.co/6gzWwSq/Rectangle-21-1.png', 'https://i.ibb.co/6gzWwSq/Rectangle-22-1.png'],
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quas recusandae cumque est repellendus vel atque quae optio iusto. Impedit facere corporis ratione voluptas ipsam doloribus modi repellat sunt libero!',
      seller: 'amazone',
      sellerHref: '#',
      availableItems: 5,
      category: 'travel'
    },
    {
      id: '3',
      name: 'Focus Paper Refill',
      price: 89,
      images: ['https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg', 'https://i.ibb.co/c6KyDXN/Rectangle-5-1.png', 'https://i.ibb.co/c6KyDXN/Rectangle-6-1.png', 'https://i.ibb.co/c6KyDXN/Rectangle-7-1.png'],
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quas recusandae cumque est repellendus vel atque quae optio iusto. Impedit facere corporis ratione voluptas ipsam doloribus modi repellat sunt libero!',
      seller: 'amazone',
      sellerHref: '#',
      availableItems: 5,
      category: 'travel'
    },
    {
      id: '4',
      name: 'Machined Mechanical Pencil',
      price: 35.00,
      images: ['https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg', 'https://i.ibb.co/SX762kX/Rectangle-36-1.png', 'https://i.ibb.co/g9xsdCM/Rectangle-37.pngg', 'https://i.ibb.co/g9xsdCM/Rectangle-38.pngg' ],
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quas recusandae cumque est repellendus vel atque quae optio iusto. Impedit facere corporis ratione voluptas ipsam doloribus modi repellat sunt libero!',
      seller: 'amazone',
      sellerHref: '#',
      availableItems: 5,
      discount: 12,
      category: 'organization'
    },
  ];

  describe('Home page' , () => {
    it('it should render all products', async () => {
        render(<Home />)
        expect(await screen.findAllByTestId(/productCard/)).toHaveLength(mockedProducts.length);
    })
  })