import { sortOrder } from "../components/dashboard.interface";
import { IProduct } from "../components/product.interface";

export interface IProductState {
    allProducts: IProduct[],
    filteredProducts: IProduct[],
    categories: string[],
    search: string,
    sortType: sortOrder,
}