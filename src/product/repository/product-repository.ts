import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma.service";


@Injectable()
export class ProductRepository {
    constructor(private prisma:PrismaService){

    }

    async save(product:Prisma.ProductUncheckedCreateInput){
       const creteProdcut = await this.prisma.product.create({data:{
            name: product.name,
            price: product.price,
            inStock: product.inStock,
            isAvailable: product.isAvailable
        }});
        return product;
    }

    async get(id:string){
        return await this.prisma.product.findUnique({where:{id}})
    }

    async update(product){

        return await this.prisma.product.update({
            where:{id:product.id},
            data:{
            name: product.name,
            price: product.price,
            inStock: product.inStock,
            isAvailable: product.isAvailable
            }
        })
    }

    async delete(id:string){
        return await this.prisma.product.delete({where:{id}})
    }
    
}