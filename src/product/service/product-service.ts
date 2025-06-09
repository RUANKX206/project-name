import { Injectable } from "@nestjs/common";
import { ProductRepository } from "../repository/product-repository";
import { create } from "domain";
import { string } from "zod";

interface Product {
    id : string;
    name : string; 
    price : number;
    inStock : number;
    isAvailable : Boolean;
}

interface CreateProductServiceRequest {
    name : string; 
    price : number;
    inStock : number;
    isAvailable : boolean;
}




@Injectable()
export class ProductService {
    
    constructor(private repository:ProductRepository){
       


    } 
    async create(data:CreateProductServiceRequest){
        return this.repository.save(data);
    } 

    async getProduct(id:string){
        return this.repository.get(id);

    }

    async update(product: Product){

        return this.repository.update(product);
    }
    
   async deleteProduct(id:string){
        return this.repository.delete(id);

    }
}
