import { Module } from '@nestjs/common';
import { ProductController } from './product/controller/product-controller';
import { ProductRepository } from './product/repository/product-repository';
import { ProductService } from './product/service/product-service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductRepository, ProductService, PrismaService],
})
export class AppModule {}
