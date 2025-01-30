import { Prisma } from "@prisma/client";
import prismaService from "../../config/prismaClient";

export class ProductService {
  findAll() {
    return prismaService.product.findMany();
    // throw new Error('test error')
  }

  create(dto: Prisma.ProductCreateInput) {
    return prismaService.product.create({ data: dto });
  }

  update(id: number, dto: Prisma. ProductUpdateInput) {
    return prismaService.product.update({ where: { id }, data: dto });
  }

  delete(id: number) {
    return prismaService.product.delete({ where: { id } });
  }
}
