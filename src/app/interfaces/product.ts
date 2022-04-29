export interface Product {
    _id?: string; 
    name?: string;
    description?: string;
    price?: number;
}

export interface ProductResponse {
    ok: boolean;
    msg?: string;
    products?: Product[];
    product?: Product;
}