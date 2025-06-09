import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ProductService } from "../service/product-service";
import { z } from "zod";
import { ZodValidationPipe } from "src/pipes/zod-validation-pipe";

    const createProductBodySchema = z.object({
    name: z.string(),
    price: z.number(),
    inStock: z.number().int().nonnegative(),
    isAvailable: z.boolean(),

  });

    const bodyValidationPipe = new ZodValidationPipe(createProductBodySchema);
    type CreateProductBodySchema = z.infer<typeof createProductBodySchema>;



    const updateProductBodySchema = z.object({
    id: z.string(),
    name: z.string(),
    price: z.number(),
    inStock: z.number().int().nonnegative(),
    isAvailable: z.boolean(),


  });


    type UpdateProductBodySchema = z.infer<typeof updateProductBodySchema>;



@Controller("products")
export class ProductController {

    constructor(private readonly productService: ProductService) {
    }

    @Get(":id")
    async getById(@Param("id")id:string){

        return this.productService.getProduct(id);


    }

    @Post()
    async create(@Body() body: CreateProductBodySchema){
        const product = await this.productService.create(body)

        return product;
    }

    @Put()
    @HttpCode(HttpStatus.NO_CONTENT)
    async update(@Body()body: UpdateProductBodySchema){
        const product = await this.productService.update(body)

        return product;
    }

    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param("id")id:string ){

         return this.productService.deleteProduct(id);
    }
     
}



