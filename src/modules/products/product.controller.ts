import { Request, Response } from "express";
import { ProductService } from "./product.service";
import { CatchErrors } from "../../lib/utils/catchErrors";

export class ProductController {
  private readonly productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  @CatchErrors
  async findAll(_req: Request, res: Response): Promise<void> {
    const products = await this.productService.findAll();
    res.status(200).json(products);
  }

  @CatchErrors
  async create(req: Request, res: Response): Promise<void> {
    const products = await this.productService.create(req.body);
    res.status(200).json(products);
  }

  @CatchErrors
  async update(req: Request, res: Response): Promise<void> {
    const products = await this.productService.update(
      +req.params.id,
      req.body
    );
    res.status(200).json(products);
  }

  @CatchErrors
  async delete(req: Request, res: Response): Promise<void> {
    const products = await this.productService.delete(+req.params.id);
    res.status(200).json(products);
  }
}
