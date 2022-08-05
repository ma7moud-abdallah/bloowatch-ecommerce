import { IProduct } from '../components/product.interface';
export interface ICart{
    products: IProduct[],
    cost: number,
    shippingCost: number
}