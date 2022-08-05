export interface IProduct {
    id: string;
    name: string;
    description: string;
    price: Float32Array;
    discount?: number;
    seller: string;
    sellerHref: string;
    images: string[];
    imageAlt: string;
    category: string;
    availableItems: number;
    qty?: number;
}